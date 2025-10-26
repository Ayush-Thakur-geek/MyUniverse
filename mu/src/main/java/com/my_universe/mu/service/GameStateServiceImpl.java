package com.my_universe.mu.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.my_universe.mu.dtos.TokenRequestDto;
import com.my_universe.mu.model.PlayerState;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import redis.clients.jedis.UnifiedJedis;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
@Log4j2
public class GameStateServiceImpl implements GameStateService {

    private final ObjectMapper objectMapper;
    @Value("${redis.url}")
    private String redisUrl;

    private final RoomService roomService;

    private final ConcurrentMap<String, ConcurrentMap<String, PlayerState>> roomPlayerMap;

    private final ConcurrentMap<String, List<PlayerState>[][]> roomGridMap;

    private final ConcurrentMap<String, ConcurrentMap<String, Set<String>>> roomProximityMap;

    private final SimpMessagingTemplate messagingTemplate;

    private final RestTemplate  restTemplate;

    private final UnifiedJedis jedis;

    ExecutorService executor = Executors.newFixedThreadPool(10);

    GameStateServiceImpl(RoomService roomService, SimpMessagingTemplate messagingTemplate, RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.roomService = roomService;
        roomPlayerMap = new ConcurrentHashMap<>();
        roomGridMap = new ConcurrentHashMap<>();
        roomProximityMap = new ConcurrentHashMap<>();
        this.messagingTemplate = messagingTemplate;
        this.restTemplate = restTemplate;
        this.jedis = new UnifiedJedis("redis://localhost:6380");
        this.objectMapper = objectMapper;
    }
    int numBlocksX = 800/100;
    int numBlocksY = 600/100;

    @Override
//    public void addPlayer(PlayerState playerState) {
//        ConcurrentMap<String, PlayerState> playerMap;
//        List<PlayerState>[][] playerGrid;
//        String roomId = playerState.getRoomId();
//        if (roomPlayerMap.containsKey(playerState.getRoomId())) {
//            playerMap = roomPlayerMap.get(roomId);
//            playerGrid = roomGridMap.get(roomId);
//        } else {
//            playerMap = new ConcurrentHashMap<>();
//            playerGrid = new ArrayList[numBlocksX][numBlocksY];
//            for (int i = 0; i < numBlocksX; i++) {
//                for (int j = 0; j < numBlocksY; j++) {
//                    playerGrid[i][j] = new ArrayList<>();
//                }
//            }
//        }
//        playerMap.put(playerState.getUserName(), playerState);
//
//        float x = playerState.getX();
//        float y = playerState.getY();
//        int i = (int) Math.floor(x/100);
//        int j = (int) Math.floor(y/100);
//        i = Math.max(0, Math.min(numBlocksX - 1, i));
//        j = Math.max(0, Math.min(numBlocksY - 1, j));
//        playerGrid[i][j].add(playerState);
//        roomGridMap.put(roomId, playerGrid);
//        roomPlayerMap.put(roomId, playerMap);
//        log.info("Player " + playerState.getUserName() + " added to room " + playerState.getRoomId());
//    }

    public void addPlayer(PlayerState playerState) {
        String playerJson = "";
        String roomId = playerState.getRoomId();
        String userName = playerState.getUserName();

        try {
            playerJson = objectMapper.writeValueAsString(playerState);
        } catch (Exception e) {
            log.error("Error converting PlayerState to JSON: " + e.getMessage());
            throw new RuntimeException("Failed to serialize player state", e);
        }

        // 1. Store player mapping (Hash)
        jedis.hset("room:" + roomId + ":players", userName, playerJson);

        // 2. Compute grid coordinate
        float x = playerState.getX();
        float y = playerState.getY();
        int i = (int) Math.floor(x / 100);
        int j = (int) Math.floor(y / 100);
        i = Math.max(0, Math.min(numBlocksX - 1, i));
        j = Math.max(0, Math.min(numBlocksY - 1, j));

        // 3. Store only the userName reference in the grid (Set)
        jedis.sadd("room:" + roomId + ":grid:" + i + ":" + j, userName);

        log.info("Player " + userName + " added to grid cell " + i + "," + j + " in room " + roomId);
    }

    @Override
//    public boolean updatePlayerPosition(PlayerState position) {
//        if (!roomPlayerMap.containsKey(position.getRoomId())) {
//            log.info("Room " + position.getRoomId() + " not found");
//            return false;
//        }
//
//        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(position.getRoomId());
//        List<PlayerState>[][] grid = roomGridMap.get(position.getRoomId());
//        String userName = position.getUserName();
//
//        if (!players.containsKey(userName)) {
//            log.info("Player " + userName + " not found in room " + position.getRoomId());
//            return false;
//        }
//
//        PlayerState playerState = players.get(userName);
//        float oldX = playerState.getX();
//        float oldY = playerState.getY();
//        float newX = position.getX();
//        float newY = position.getY();
//
//        // ✅ FIX 1: Clamp coordinates FIRST to prevent out-of-bounds
//        newX = Math.max(0, Math.min(799.99f, newX));
//        newY = Math.max(0, Math.min(599.99f, newY));
//
//        // Calculate grid positions
//        int oldI = (int) Math.floor(oldX / 100);
//        int oldJ = (int) Math.floor(oldY / 100);
//        int newI = (int) Math.floor(newX / 100);
//        int newJ = (int) Math.floor(newY / 100);
//
//        // ✅ FIX 2: Clamp OLD grid indices too
//        oldI = Math.max(0, Math.min(numBlocksX - 1, oldI));
//        oldJ = Math.max(0, Math.min(numBlocksY - 1, oldJ));
//        newI = Math.max(0, Math.min(numBlocksX - 1, newI));
//        newJ = Math.max(0, Math.min(numBlocksY - 1, newJ));
//
//        final float MINIMUM_DISTANCE = 32.0f;
//        final float PROXIMITY_DISTANCE = 60.0f;
//
//        Set<String> currentProximityPlayers = new HashSet<>();
//
//        // Check current cell and adjacent cells (9 cells total)
//        for (int di = -1; di <= 1; di++) {
//            for (int dj = -1; dj <= 1; dj++) {
//                int checkI = newI + di;
//                int checkJ = newJ + dj;
//
//                if (checkI < 0 || checkI >= numBlocksX || checkJ < 0 || checkJ >= numBlocksY) {
//                    continue;
//                }
//
//                List<PlayerState> playersInCell = grid[checkI][checkJ];
//
//                for (PlayerState neighbourPlayerState : playersInCell) {
//                    if (!neighbourPlayerState.getUserName().equals(userName)) {
//                        float dx = neighbourPlayerState.getX() - newX;
//                        float dy = neighbourPlayerState.getY() - newY;
//                        float distance = (float) Math.sqrt(dx * dx + dy * dy);
//
//                        if (distance < MINIMUM_DISTANCE) {
//                            log.info("Collision detected: Player " + userName + " too close to " +
//                                    neighbourPlayerState.getUserName() + " (distance: " + distance + ")");
//                            return false;
//                        } else if (distance < PROXIMITY_DISTANCE) {
//                            currentProximityPlayers.add(neighbourPlayerState.getUserName());
//                        }
//                    }
//                }
//            }
//        }
//
//        // ✅ FIX 3: Update position with clamped coordinates
//        position.setX(newX);
//        position.setY(newY);
//
//        // Update player state in map
//        players.put(userName, position);
//
//        // Remove from old grid cell
//        grid[oldI][oldJ].remove(playerState);
//
//        // Add to new grid cell
//        grid[newI][newJ].add(position);
//
//        executor.submit(() -> {
//            try {
//                roomProximityMap.putIfAbsent(position.getRoomId(), new ConcurrentHashMap<>());
//                handleProximityChanges(position.getRoomId(), userName, currentProximityPlayers);
//            } catch (Exception e) {
//                log.error("Error handling proximity changes", e);
//            }
//        });
//
//        log.info("Player " + userName + " moved from (" + oldX + "," + oldY + ") to (" + newX + "," + newY + ")");
//        return true;
//    }

    public boolean updatePlayerPosition(PlayerState position) {
        String userName = position.getUserName();
        String roomId = position.getRoomId();

        try {
            // ✅ FIX 1: Check if player exists
            String playerJson = jedis.hget("room:" + roomId + ":players", userName);
            if (playerJson == null) {
                log.info("Player " + userName + " not found in room " + roomId);
                return false;
            }

            PlayerState oldState = objectMapper.readValue(playerJson, PlayerState.class);

            float oldX = oldState.getX();
            float oldY = oldState.getY();
            float newX = position.getX();
            float newY = position.getY();

            // Clamp coordinates to prevent out-of-bounds
            newX = Math.max(0, Math.min(799.99f, newX));
            newY = Math.max(0, Math.min(599.99f, newY));

            // Calculate grid positions
            int oldI = (int) Math.floor(oldX / 100);
            int oldJ = (int) Math.floor(oldY / 100);
            int newI = (int) Math.floor(newX / 100);
            int newJ = (int) Math.floor(newY / 100);

            // Clamp grid indices
            oldI = Math.max(0, Math.min(numBlocksX - 1, oldI));
            oldJ = Math.max(0, Math.min(numBlocksY - 1, oldJ));
            newI = Math.max(0, Math.min(numBlocksX - 1, newI));
            newJ = Math.max(0, Math.min(numBlocksY - 1, newJ));

            final float MINIMUM_DISTANCE = 32.0f;
            final float PROXIMITY_DISTANCE = 60.0f;

            Set<String> currentProximityPlayers = new HashSet<>();

            // Check collision in current and adjacent cells
            for (int di = -1; di <= 1; di++) {
                for (int dj = -1; dj <= 1; dj++) {
                    int checkI = newI + di;
                    int checkJ = newJ + dj;

                    if (checkI < 0 || checkI >= numBlocksX || checkJ < 0 || checkJ >= numBlocksY) {
                        continue;
                    }

                    Set<String> userNames = jedis.smembers("room:" + roomId + ":grid:" + checkI + ":" + checkJ);

                    for (String uname : userNames) {
                        if (!uname.equals(userName)) {
                            String neighbourPlayerJson = jedis.hget("room:" + roomId + ":players", uname);
                            if (neighbourPlayerJson == null) continue; // Skip if player was just removed

                            PlayerState neighbourPlayerState = objectMapper.readValue(neighbourPlayerJson, PlayerState.class);
                            float dx = neighbourPlayerState.getX() - newX;
                            float dy = neighbourPlayerState.getY() - newY;
                            float distance = (float) Math.sqrt(dx * dx + dy * dy);

                            if (distance < MINIMUM_DISTANCE) {
                                log.info("Collision detected: Player " + userName + " too close to " +
                                        neighbourPlayerState.getUserName() + " (distance: " + distance + ")");
                                return false;
                            } else if (distance < PROXIMITY_DISTANCE) {
                                currentProximityPlayers.add(neighbourPlayerState.getUserName());
                            }
                        }
                    }
                }
            }

            // Update position with clamped coordinates
            position.setX(newX);
            position.setY(newY);

            // Store updated player state
            String newPositionJson = objectMapper.writeValueAsString(position);
            jedis.hset("room:" + roomId + ":players", userName, newPositionJson);

            // Update grid only if cell changed
            if (oldI != newI || oldJ != newJ) {
                jedis.srem("room:" + roomId + ":grid:" + oldI + ":" + oldJ, userName);
                jedis.sadd("room:" + roomId + ":grid:" + newI + ":" + newJ, userName);
            }

            // Handle proximity changes asynchronously
            executor.submit(() -> {
                try {
                    handleProximityChangesJedis(position.getRoomId(), userName, currentProximityPlayers);
                } catch (Exception e) {
                    log.error("Error handling proximity changes", e);
                }
            });

            log.info("Player " + userName + " moved from (" + oldX + "," + oldY + ") to (" + newX + "," + newY + ")");
            return true;

        } catch (JsonProcessingException e) {
            log.error("Error processing JSON for player " + userName, e);
            return false;
        }
    }


    private void handleProximityChanges(String roomId, String userName, Set<String> currentProximityPlayers) {
        ConcurrentMap<String, Set<String>> roomProximity = roomProximityMap.get(roomId);
        Set<String> previousProximityPlayers = roomProximity.getOrDefault(userName, new HashSet<>());

        Set<String> newProximityPlayers = new HashSet<>(currentProximityPlayers);
        newProximityPlayers.removeAll(previousProximityPlayers);

        Set<String> leavingPlayers = new HashSet<>(previousProximityPlayers);
        leavingPlayers.removeAll(currentProximityPlayers);

        // FIX: Store ALL current proximity players, not just new ones
        roomProximity.put(userName, currentProximityPlayers); // Changed from newProximityPlayers

        System.out.println("proximity players updated: " + currentProximityPlayers.size());

        if (!newProximityPlayers.isEmpty() || !leavingPlayers.isEmpty()) {
            System.out.println("calling sendProximityUpdates()");
            sendProximityUpdates(roomId, userName, newProximityPlayers, leavingPlayers);
        }
    }

    private void handleProximityChangesJedis(String roomId, String userName, Set<String> currentProximityPlayers) {
        String proxKey = "room:" + roomId + ":proximity:" + userName;

        try {
            // Get previous proximity set from Redis
            Set<String> previousProximityPlayers = jedis.smembers(proxKey);

            // Compute new arrivals and leavers
            Set<String> newProximityPlayers = new HashSet<>(currentProximityPlayers);
            newProximityPlayers.removeAll(previousProximityPlayers);

            Set<String> leavingPlayers = new HashSet<>(previousProximityPlayers);
            leavingPlayers.removeAll(currentProximityPlayers);

            // ✅ FIX: Use atomic operations with proper ordering
            if (currentProximityPlayers.isEmpty()) {
                // No one in proximity, delete the key
                jedis.del(proxKey);
            } else {
                // Remove players no longer in proximity
                if (!leavingPlayers.isEmpty()) {
                    jedis.srem(proxKey, leavingPlayers.toArray(new String[0]));
                }
                // Add new players in proximity
                if (!newProximityPlayers.isEmpty()) {
                    jedis.sadd(proxKey, newProximityPlayers.toArray(new String[0]));
                }
            }

            log.info("Proximity players updated: {} for user: {}", currentProximityPlayers.size(), userName);

            // Send updates only if there are actual changes
            if (!newProximityPlayers.isEmpty() || !leavingPlayers.isEmpty()) {
                log.info("Calling sendProximityUpdates for new: {} and leaving: {}", newProximityPlayers, leavingPlayers);
                sendProximityUpdates(roomId, userName, newProximityPlayers, leavingPlayers);
            }
        } catch (Exception e) {
            log.error("Error in handleProximityChangesJedis for user " + userName, e);
        }
    }

    private void sendProximityUpdates(String roomId,
                                      String userName,
                                      Set<String> newProximityPlayers,
                                      Set<String> leavingPlayers) {
        try {
            Map<String, Object> proximityUpdate = new HashMap<>();
            proximityUpdate.put("flag", false);
            proximityUpdate.put("type", "video-proximity-update");
            proximityUpdate.put("userName", userName);
            proximityUpdate.put("newProximityPlayers", newProximityPlayers);
            proximityUpdate.put("leavingPlayers", leavingPlayers);
            proximityUpdate.put("timestamp", System.currentTimeMillis());

            messagingTemplate.convertAndSendToUser(userName,
                    "/queue/" + roomId + "/video-proximity",
                    proximityUpdate
            );

    //        for (String playerName : newProximityPlayers) {
    //            System.out.println("Player in proximity: " + playerName);
    //        }

            // Also notify the users who are entering/leaving proximity
            for (String otherUser : newProximityPlayers) {
                System.out.println("sending proximity update: " + otherUser);
                Map<String, Object> reverseUpdate = new HashMap<>();
                reverseUpdate.put("flag", true);
                reverseUpdate.put("type", "video-proximity-update");
                reverseUpdate.put("userName", otherUser);
                reverseUpdate.put("newProximityPlayers", Set.of(userName));
                reverseUpdate.put("leavingPlayers", Collections.emptySet());
                reverseUpdate.put("timestamp", System.currentTimeMillis());

                messagingTemplate.convertAndSendToUser(otherUser, "/queue/" + roomId + "/video-proximity", reverseUpdate);
            }

            for (String otherUser : leavingPlayers) {
                Map<String, Object> reverseUpdate = new HashMap<>();
                reverseUpdate.put("type", "video-proximity-update");
                reverseUpdate.put("userName", otherUser);
                reverseUpdate.put("newProximityPlayers", Collections.emptySet());
                reverseUpdate.put("leavingPlayers", Set.of(userName));
                reverseUpdate.put("timestamp", System.currentTimeMillis());

                messagingTemplate.convertAndSendToUser(otherUser, "/queue/" + roomId + "/video-proximity", reverseUpdate);
            }

            log.info("Proximity update sent for user {} in room {}: entering={}, leaving={}",
                    userName, roomId, newProximityPlayers, leavingPlayers);

        } catch (Exception e) {
            e.printStackTrace(); // <--- see the exception
        }
    }


    @Override
    public Map<String, Object> createVideoSession(String roomId, String userName) {
        TokenRequestDto dto = new TokenRequestDto(userName, roomId);

        // POST to the RTC server with DTO as body, expecting Map response
        ResponseEntity<Map> resp = restTemplate.postForEntity(
                "http://localhost:9090/token",
                dto,
                Map.class
        );
        return resp.getBody();
    }

    @Override
//    public List<PlayerState> getAllPlayerPositions(String roomId) {
//        if (!roomPlayerMap.containsKey(roomId)) throw new IllegalArgumentException("Wrong room id");
//        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(roomId);
//        return players.values().stream().toList();
//    }

    public List<PlayerState> getAllPlayerPositions(String roomId) {
        try {
            Map<String, String> playerJsonMap = jedis.hgetAll("room:" + roomId + ":players");

            if (playerJsonMap.isEmpty()) {
                throw new IllegalArgumentException("Wrong room id: " + roomId);
            }

            List<PlayerState> players = new ArrayList<>();
            for (String playerJson : playerJsonMap.values()) {
                players.add(objectMapper.readValue(playerJson, PlayerState.class));
            }

            return players;

        } catch (JsonProcessingException e) {
            log.error("Error deserializing player data for room " + roomId, e);
            throw new RuntimeException("Failed to get player positions", e);
        }
    }

    @Override
//    public PlayerState removePlayer(String roomId, String playerId) {
//        if (!roomPlayerMap.containsKey(roomId)) throw new IllegalArgumentException("Room id " + roomId + " does not exist");
//        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(roomId);
//        if (!players.containsKey(playerId)) throw new IllegalArgumentException("Player id " + playerId + " does not exist");
//        PlayerState player = players.remove(playerId);
//        log.info("Player " + playerId + " removed from room " + roomId);
//        if (players.isEmpty()) {
//            roomPlayerMap.remove(roomId);
//            roomService.removeRoom(roomId);
//            log.info("Player " + playerId + " removed from room " + roomId + " which was deleted");
//        }
//
//        return player;
//    }

    public PlayerState removePlayer(String roomId, String playerId) {
        try {
            String playerKey = "room:" + roomId + ":players";

            // Check if player exists and get their data
            String playerJson = jedis.hget(playerKey, playerId);
            if (playerJson == null) {
                throw new IllegalArgumentException("Player id " + playerId + " does not exist in room " + roomId);
            }

            PlayerState player = objectMapper.readValue(playerJson, PlayerState.class);

            // Remove from player hash
            jedis.hdel(playerKey, playerId);

            // Remove from grid cell
            float x = player.getX();
            float y = player.getY();
            int i = (int) Math.floor(x / 100);
            int j = (int) Math.floor(y / 100);
            i = Math.max(0, Math.min(numBlocksX - 1, i));
            j = Math.max(0, Math.min(numBlocksY - 1, j));

            jedis.srem("room:" + roomId + ":grid:" + i + ":" + j, playerId);

            // Remove proximity data for this player
            jedis.del("room:" + roomId + ":proximity:" + playerId);

            // Also remove this player from other players' proximity sets
            // (Optional but cleaner - prevents stale references)
            for (int gi = 0; gi < numBlocksX; gi++) {
                for (int gj = 0; gj < numBlocksY; gj++) {
                    Set<String> nearbyPlayers = jedis.smembers("room:" + roomId + ":grid:" + gi + ":" + gj);
                    for (String nearbyPlayer : nearbyPlayers) {
                        jedis.srem("room:" + roomId + ":proximity:" + nearbyPlayer, playerId);
                    }
                }
            }

            log.info("Player " + playerId + " removed from room " + roomId);

            // Check if room is empty and clean up
            Map<String, String> remainingPlayers = jedis.hgetAll(playerKey);
            if (remainingPlayers.isEmpty()) {
                cleanupEmptyRoomJedis(roomId);
                log.info("Room " + roomId + " deleted as last player left");
            }

            return player;

        } catch (JsonProcessingException e) {
            log.error("Error deserializing player data for " + playerId, e);
            throw new RuntimeException("Failed to remove player", e);
        }
    }

    private void cleanupEmptyRoomJedis(String roomId) {
        // Delete player hash
        jedis.del("room:" + roomId + ":players");

        // Delete all grid cells
        for (int i = 0; i < numBlocksX; i++) {
            for (int j = 0; j < numBlocksY; j++) {
                jedis.del("room:" + roomId + ":grid:" + i + ":" + j);
            }
        }

        // Delete proximity keys - use pattern matching
        // Note: This is simplified. In production, consider using SCAN for better performance
        Set<String> proximityKeys = jedis.keys("room:" + roomId + ":proximity:*");
        if (!proximityKeys.isEmpty()) {
            jedis.del(proximityKeys.toArray(new String[0]));
        }

        // Remove from room service
        roomService.removeRoom(roomId);
    }

    @Override
//    public PlayerState getPlayer(String roomId, String playerId) {
//        if (!roomPlayerMap.containsKey(roomId)) throw new IllegalArgumentException("Wrong room id");
//        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(roomId);
//        if (!players.containsKey(playerId)) throw new IllegalArgumentException("Player id " + playerId + " does not exist");
//        return players.get(playerId);
//    }

    public PlayerState getPlayer(String roomId, String playerId) {
        try {
            String playerJson = jedis.hget("room:" + roomId + ":players", playerId);

            if (playerJson == null) {
                throw new IllegalArgumentException("Player id " + playerId + " does not exist in room " + roomId);
            }

            return objectMapper.readValue(playerJson, PlayerState.class);

        } catch (JsonProcessingException e) {
            log.error("Error deserializing player data for " + playerId, e);
            throw new RuntimeException("Failed to get player", e);
        }
    }


    @Override
//    public boolean playerExists(String roomId, String username) {
//        ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(roomId);
//        boolean exists = players != null && players.containsKey(username);
//        if (!exists) {
//            log.info("Room or player does not exist: roomId=" + roomId + ", username=" + username);
//        }
//        return exists;
//    }

    public boolean playerExists(String roomId, String username) {
        Boolean exists = jedis.hexists("room:" + roomId + ":players", username);

        if (!exists) {
            log.info("Room or player does not exist: roomId=" + roomId + ", username=" + username);
        }

        return exists;
    }
}
