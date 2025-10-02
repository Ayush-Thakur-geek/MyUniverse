package com.my_universe.mu.service;

import com.my_universe.mu.model.PlayerState;

import java.util.List;
import java.util.Map;

public interface GameStateService {

    void addPlayer(PlayerState playerState);

    boolean updatePlayerPosition(PlayerState position);

    List<PlayerState> getAllPlayerPositions(String roomId);

    PlayerState removePlayer(String roomId, String playerId);

    boolean playerExists(String roomId, String username);

    public Map<String, Object> createVideoSession(String roomId, String userName);
}
