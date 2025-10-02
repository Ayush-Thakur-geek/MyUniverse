package com.my_universe.mu.service;

import com.my_universe.mu.model.PlayerState;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
@Log4j2
public class GameStateServiceImpl implements GameStateService {

    private final RoomService roomService;

    private final ConcurrentMap<String, ConcurrentMap<String, PlayerState>> roomPlayerMap;

    private final ConcurrentMap<String, List<PlayerState>[][]> roomGridMap;

    private final ConcurrentMap<String, ConcurrentMap<String, Set<String>>> roomProximityMap;

    private final SimpMessagingTemplate messagingTemplate;

    ExecutorService executor = Executors.newFixedThreadPool(10);

    GameStateServiceImpl(RoomService roomService, SimpMessagingTemplate messagingTemplate) {
        this.roomService = roomService;
        roomPlayerMap = new ConcurrentHashMap<>();
        roomGridMap = new ConcurrentHashMap<>();
        roomProximityMap = new ConcurrentHashMap<>();
        this.messagingTemplate = messagingTemplate;
    }
    int numBlocksX = 800/100;
    int numBlocksY = 600/100;

    @Override
    public void addPlayer(PlayerState playerState) {
        ConcurrentMap<String, PlayerState> playerMap;
        List<PlayerState>[][] playerGrid;
        String roomId = playerState.getRoomId();
        if (roomPlayerMap.containsKey(playerState.getRoomId())) {
            playerMap = roomPlayerMap.get(roomId);
            playerGrid = roomGridMap.get(roomId);
        } else {
            playerMap = new ConcurrentHashMap<>();
            playerGrid = new ArrayList[numBlocksX][numBlocksY];
            for (int i = 0; i < numBlocksX; i++) {
                for (int j = 0; j < numBlocksY; j++) {
                    playerGrid[i][j] = new ArrayList<>();
                }
            }
        }
        playerMap.put(playerState.getUserName(), playerState);

        float x = playerState.getX();
        float y = playerState.getY();
        int i = (int) Math.floor(x/100);
        int j = (int) Math.floor(y/100);
        i = Math.max(0, Math.min(numBlocksX - 1, i));
        j = Math.max(0, Math.min(numBlocksY - 1, j));
        playerGrid[i][j].add(playerState);
        roomGridMap.put(roomId, playerGrid);
        roomPlayerMap.put(roomId, playerMap);
        log.info("Player " + playerState.getUserName() + " added to room " + playerState.getRoomId());
    }


    @Override
    public boolean updatePlayerPosition(PlayerState position) {
        if (!roomPlayerMap.containsKey(position.getRoomId())) {
            log.info("Room " + position.getRoomId() + " not found");
            return false;
        }

        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(position.getRoomId());
        List<PlayerState>[][] grid = roomGridMap.get(position.getRoomId());
        String userName = position.getUserName();

        if (!players.containsKey(userName)) {
            log.info("Player " + userName + " not found in room " + position.getRoomId());
            return false;
        }

        PlayerState playerState = players.get(userName);
        float oldX = playerState.getX();
        float oldY = playerState.getY();
        float newX = position.getX();
        float newY = position.getY();

        // Calculate grid positions
        int oldI = (int) Math.floor(oldX / 100);
        int oldJ = (int) Math.floor(oldY / 100);
        int newI = (int) Math.floor(newX / 100);
        int newJ = (int) Math.floor(newY / 100);

        // Clamp grid indices to valid bounds
        newI = Math.max(0, Math.min(numBlocksX - 1, newI));
        newJ = Math.max(0, Math.min(numBlocksY - 1, newJ));

        // Also clamp actual coordinates to world bounds (optional but recommended)
        // newX = Math.max(PLAYER_RADIUS, Math.min(WORLD_WIDTH - PLAYER_RADIUS, newX));
        // newY = Math.max(PLAYER_RADIUS, Math.min(WORLD_HEIGHT - PLAYER_RADIUS, newY));

        // Check for collisions in the NEW grid cell and adjacent cells
        final float MINIMUM_DISTANCE = 32.0f; // 16px radius * 2
        final int GRID_SIZE = 100;

        //Check for proximity of the players
        final float PROXIMITY_DISTANCE = 60.0F;

        Set<String> currentProximityPlayers = new HashSet<>();
        boolean collisionDetected = false;

        // Check current cell and adjacent cells (9 cells total in 3x3 grid)
        for (int di = -1; di <= 1; di++) {
            for (int dj = -1; dj <= 1; dj++) {
                int checkI = newI + di;
                int checkJ = newJ + dj;

                // Skip if out of bounds
                if (checkI < 0 || checkI >= numBlocksX || checkJ < 0 || checkJ >= numBlocksY) {
                    continue;
                }

                List<PlayerState> playersInCell = grid[checkI][checkJ];

                for (PlayerState neighbourPlayerState : playersInCell) {
                    // Don't check collision against self
                    if (!neighbourPlayerState.getUserName().equals(userName)) {
                        float dx = neighbourPlayerState.getX() - newX;
                        float dy = neighbourPlayerState.getY() - newY;
                        float distance = (float) Math.sqrt(dx * dx + dy * dy);

                        if (distance < MINIMUM_DISTANCE) {
                            log.info("Collision detected: Player " + userName + " too close to " + neighbourPlayerState.getUserName() + " (distance: " + distance + ")");
                            return false;
                        } else if (distance < PROXIMITY_DISTANCE) {
                            currentProximityPlayers.add(neighbourPlayerState.getUserName());
                        }
                    }
                }
            }
        }

        // Update player position
        players.put(userName, position);

        // Remove from old grid cell
        grid[oldI][oldJ].remove(playerState);

        // Add to new grid cell
        grid[newI][newJ].add(position);

//        Thread t = new Thread(() -> {
//            handleProximityChanges(position.getRoomId(), userName, currentProximityPlayers);
//        });
        executor.submit(() -> {
            handleProximityChanges(position.getRoomId(), userName, currentProximityPlayers);
        });



        log.info("Player " + userName + " moved from (" + oldX + "," + oldY + ") to (" + newX + "," + newY + ")");
        return true;
    }

    private void handleProximityChanges(String roomId, String userName, Set<String> currentProximityPlayers) {
        ConcurrentMap<String, Set<String>> roomProximity = roomProximityMap.get(roomId);
        Set<String> previousProximityPlayers = roomProximity.getOrDefault(userName, new HashSet<>());

        Set<String> newProximityPlayers = new HashSet<>(currentProximityPlayers);
        newProximityPlayers.removeAll(previousProximityPlayers);

        Set<String> leavingPlayers = new HashSet<>(previousProximityPlayers);
        leavingPlayers.removeAll(currentProximityPlayers);

        roomProximity.put(userName, newProximityPlayers);

        if (!newProximityPlayers.isEmpty() || !leavingPlayers.isEmpty()) {
            sendProximityUpdates(roomId, userName, newProximityPlayers, leavingPlayers);
        }
    }
//
    private void sendProximityUpdates(String roomId,
                                      String userName,
                                      Set<String> newProximityPlayers,
                                      Set<String> leavingPlayers) {
        Map<String, Object> proximityUpdate = new HashMap<>();
        proximityUpdate.put("type", "video-proximity-update");
        proximityUpdate.put("userName", userName);
        proximityUpdate.put("newProximityPlayers", newProximityPlayers);
        proximityUpdate.put("leavingPlayers", leavingPlayers);
        proximityUpdate.put("timestamp", System.currentTimeMillis());

        // Send to the specific user
        messagingTemplate.convertAndSendToUser(userName, "/queue/" + roomId + "/video-proximity", proximityUpdate);

        // Also notify the users who are entering/leaving proximity
        for (String otherUser : newProximityPlayers) {
            Map<String, Object> reverseUpdate = new HashMap<>();
            reverseUpdate.put("type", "video-proximity-update");
            reverseUpdate.put("targetUser", otherUser);
            reverseUpdate.put("enteringUsers", Set.of(userName));
            reverseUpdate.put("leavingUsers", Collections.emptySet());
            reverseUpdate.put("timestamp", System.currentTimeMillis());

            messagingTemplate.convertAndSendToUser(otherUser, "/queue/" + roomId + "/video-proximity", reverseUpdate);
        }

        for (String otherUser : leavingPlayers) {
            Map<String, Object> reverseUpdate = new HashMap<>();
            reverseUpdate.put("type", "video-proximity-update");
            reverseUpdate.put("targetUser", otherUser);
            reverseUpdate.put("enteringUsers", Collections.emptySet());
            reverseUpdate.put("leavingUsers", Set.of(userName));
            reverseUpdate.put("timestamp", System.currentTimeMillis());

            messagingTemplate.convertAndSendToUser(otherUser, "/queue/" + roomId + "/video-proximity", reverseUpdate);
        }

        log.info("Proximity update sent for user {} in room {}: entering={}, leaving={}",
                userName, roomId, newProximityPlayers, leavingPlayers);
    }

    @Override
    public Map<String, Object> createVideoSession(String roomId, String userName) {
        return null;
    }

    @Override
    public List<PlayerState> getAllPlayerPositions(String roomId) {
        if (!roomPlayerMap.containsKey(roomId)) throw new IllegalArgumentException("Wrong room id");
        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(roomId);
        return players.values().stream().toList();
    }

    @Override
    public PlayerState removePlayer(String roomId, String playerId) {
        if (!roomPlayerMap.containsKey(roomId)) throw new IllegalArgumentException("Room id " + roomId + " does not exist");
        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(roomId);
        if (!players.containsKey(playerId)) throw new IllegalArgumentException("Player id " + playerId + " does not exist");
        PlayerState player = players.remove(playerId);
        log.info("Player " + playerId + " removed from room " + roomId);
        if (players.isEmpty()) {
            roomPlayerMap.remove(roomId);
            roomService.removeRoom(roomId);
            log.info("Player " + playerId + " removed from room " + roomId + " which was deleted");
        }

        return player;
    }

    @Override
    public boolean playerExists(String roomId, String username) {
        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(roomId);
        boolean exists = players != null && players.containsKey(username);
        if (!exists) {
            log.info("Room or player does not exist: roomId=" + roomId + ", username=" + username);
        }
        return exists;
    }
}
