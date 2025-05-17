package com.my_universe.mu.service;

import com.my_universe.mu.model.PlayerState;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class GameStateServiceImpl implements GameStateService {

    private final ConcurrentMap<String, PlayerState> players = new ConcurrentHashMap<>();

    @Override
    public void updatePlayerPosition(PlayerState position) {

        players.put(position.getUserId(), position);

    }

    @Override
    public List<PlayerState> getAllPlayerPositions() {
        return new ArrayList<>(players.values());
    }

    public void removePlayer(String playerId) {
        players.remove(playerId);
    }
}
