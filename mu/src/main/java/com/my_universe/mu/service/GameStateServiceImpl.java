package com.my_universe.mu.service;

import com.my_universe.mu.model.PlayerState;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
@Log4j2
public class GameStateServiceImpl implements GameStateService {

    @Autowired
    private RoomService roomService;

    private final ConcurrentMap<String, ConcurrentHashMap<String, PlayerState>> roomPlayerMap = new ConcurrentHashMap<>();

    @Override
    public void addPlayer(PlayerState playerState) {
        ConcurrentMap<String, PlayerState> playerMap =
                roomPlayerMap.computeIfAbsent(playerState.getRoomId(), k -> new ConcurrentHashMap<>());
        playerMap.put(playerState.getUserName(), playerState);
        log.info("Player " + playerState.getUserName() + " added to room " + playerState.getRoomId());
    }


    @Override
    public void updatePlayerPosition(PlayerState position) {
        if (roomPlayerMap.containsKey(position.getRoomId())) {
            ConcurrentMap<String, PlayerState> players = roomPlayerMap.get(position.getRoomId());
            players.put(position.getUserName(), position);
            log.info("Player " + position.getUserName() + " updated to " + position);
        } else log.info("Player " + position.getUserName() + " not found");
        log.info("The positions updated keeping in consideration the roomId");
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
