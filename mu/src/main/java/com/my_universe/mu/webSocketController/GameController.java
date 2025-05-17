package com.my_universe.mu.webSocketController;

import com.my_universe.mu.model.GameMessage;
import com.my_universe.mu.model.PlayerState;
import com.my_universe.mu.service.GameStateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class GameController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private GameStateService gameStateService;

    @MessageMapping("/move")
    @SendTo("/topic/position")
    public PlayerState move(PlayerState position) {
        gameStateService.updatePlayerPosition(position);
        return position;
    }

    @MessageMapping("/chat")
    @SendTo("/topic/chat")
    public GameMessage handleChat(GameMessage message) {
        return message;
    }

    @SubscribeMapping
    public List<PlayerState> sendInitialState() {
        return gameStateService.getAllPlayerPositions();
    }
}
