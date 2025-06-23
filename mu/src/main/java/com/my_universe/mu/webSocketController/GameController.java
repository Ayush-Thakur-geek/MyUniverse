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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

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
    public PlayerState join(PlayerState playerState) {
        System.out.println("player joined called: " + playerState);
        return playerState;
    }

    @SubscribeMapping("/initial")
    public Map<String, Object> sendInitialState(Principal principal) {
        System.out.println("Subscribe mapping called!");
        PlayerState initialState = newPlayerState(principal);

        if (!gameStateService.playerExists(principal.getName())) {
            gameStateService.addPlayer(initialState);

            messagingTemplate.convertAndSend("/topic/player-joined", initialState);
            System.out.println("Notified other players");
        }
        HashMap<String, Object> players = new HashMap<>();
        players.put("currentPlayer", initialState);
        players.put("allPlayers", gameStateService.getAllPlayerPositions());
        System.out.println("Current player: " + players.get("currentPlayer"));
        return players;
    }

    private PlayerState newPlayerState(Principal principal) {
        Random r = new Random();
        PlayerState newPlayer = PlayerState.builder()
                .userName(principal.getName())
                .x(r.nextInt(500))
                .y(r.nextInt(500))
                .avatarId(userService.getAvatarId(principal.getName()))
                .build();

        return newPlayer;
    }
}
