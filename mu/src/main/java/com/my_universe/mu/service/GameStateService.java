package com.my_universe.mu.service;

import com.my_universe.mu.model.PlayerState;

import java.util.List;

public interface GameStateService {

    void addPlayer(PlayerState playerState);

    void updatePlayerPosition(PlayerState position);

    List<PlayerState> getAllPlayerPositions(String roomId);

    PlayerState removePlayer(String roomId, String playerId);

    boolean playerExists(String roomId, String username);
}
