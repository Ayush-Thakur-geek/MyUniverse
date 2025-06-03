package com.my_universe.mu.webSocketController;

import com.my_universe.mu.model.GameMessage;
import com.my_universe.mu.model.PlayerState;
import com.my_universe.mu.service.GameStateService;
import com.my_universe.mu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.List;

@Controller
public class GameController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private GameStateService gameStateService;

    @Autowired
    private UserService userService;

    @MessageMapping("/move")
    @SendTo("/topic/position")
    public PlayerState move(@Payload PlayerState position) {
        gameStateService.updatePlayerPosition(position);
        return position;
    }

    @MessageMapping("/chat")
    @SendTo("/topic/chat")
    public GameMessage handleChat(@Payload GameMessage message) {
        return message;
    }

    @MessageMapping("/join")
    @SendTo("/topic/player-joined")
    public PlayerState join(Principal principal) {

        PlayerState initialState = PlayerState.builder()
                .userName(principal.getName())
                .x(0)
                .y(0)
                .avatarId(userService.getAvatarId(principal.getName()))
                .build();

        gameStateService.addPlayer(initialState);

        return initialState;
    }

    @SubscribeMapping("/initial")
    public List<PlayerState> sendInitialState(Principal principal) {
        System.out.println("Subscribe mapping called!");
        PlayerState initialState = PlayerState.builder()
                .userName(principal.getName())
                .x(100)
                .y(100)
                .avatarId(userService.getAvatarId(principal.getName()))
                .build();

        gameStateService.addPlayer(initialState);
        return gameStateService.getAllPlayerPositions();
    }
}
