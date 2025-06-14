package com.my_universe.mu.service;

import com.my_universe.mu.model.PlayerState;

import java.util.List;

public interface GameStateService {

    void addPlayer(PlayerState playerState);

    void updatePlayerPosition(PlayerState position);

    List<PlayerState> getAllPlayerPositions();

    void removePlayer(String playerId);

    boolean playerExists(String username);
}
