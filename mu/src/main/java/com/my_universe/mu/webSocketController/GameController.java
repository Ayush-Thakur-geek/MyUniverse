package com.my_universe.mu.webSocketController;

import com.my_universe.mu.annotations.TimeMonitor;
import com.my_universe.mu.model.GameMessage;
import com.my_universe.mu.model.PlayerState;
import com.my_universe.mu.service.GameStateService;
import com.my_universe.mu.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Controller
@Log4j2
public class GameController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private GameStateService gameStateService;

    @Autowired
    private UserService userService;

    @MessageMapping("/{roomId}/move")
//    @SendTo("/topic/{roomId}/position")
    public void move(@DestinationVariable String roomId, @Payload PlayerState position) {
        log.info("The movement update request recieved.");
        boolean flag = gameStateService.updatePlayerPosition(position);
        messagingTemplate.convertAndSend("/topic/" + roomId + "/canMove", flag);
        if (flag) {
            messagingTemplate.convertAndSend("/topic/" + roomId + "/position", position);
        }
        log.info("The movements have been sent to /topic/{}/position", roomId);
    }

    @MessageMapping("{roomId}/chat")
//    @SendTo("/topic/{roomId}/chat")
    public GameMessage handleChat(@DestinationVariable String roomId, @Payload GameMessage message) {
        return message;
    }

    @MessageMapping("{roomId}/join")
//    @SendTo("/topic/{roomId}/player-joined")
    public void join(@DestinationVariable String roomId,
                     @Payload PlayerState playerState,
                     SimpMessageHeaderAccessor headerAccessor) {
        System.out.println("player joined called: " + playerState + " of room " + roomId);
        headerAccessor.getSessionAttributes().put("username", playerState.getUserName());
        headerAccessor.getSessionAttributes().put("id", playerState.getUserName());
        headerAccessor.getSessionAttributes().put("roomId", roomId);
    }

    @SubscribeMapping("{roomId}/initial")
    @TimeMonitor
    public Map<String, Object> sendInitialState(@DestinationVariable String roomId, Principal principal) {
        System.out.println("Subscribe mapping called!");
        PlayerState initialState = newPlayerState(principal, roomId);

        if (!gameStateService.playerExists(initialState.getRoomId(), principal.getName())) {
            gameStateService.addPlayer(initialState);

            messagingTemplate.convertAndSend("/topic/" + roomId + "/player-joined", initialState);
            System.out.println("Notified other players");
        }
        HashMap<String, Object> players = new HashMap<>();
        players.put("currentPlayer", initialState);
        players.put("allPlayers", gameStateService.getAllPlayerPositions(initialState.getRoomId()));
        System.out.println("Current player: " + players.get("currentPlayer"));
        return players;
    }

    private PlayerState newPlayerState(Principal principal, String roomId) {
        Random r = new Random();
        System.out.println("avatarId" + userService.getAvatarId(principal.getName()));
        PlayerState newPlayer = PlayerState.builder()
                .userName(principal.getName())
                .x(r.nextInt(500))
                .y(r.nextInt(500))
                .avatarId(userService.getAvatarId(principal.getName()))
                .roomId(roomId)
                .build();

        return newPlayer;
    }
}
