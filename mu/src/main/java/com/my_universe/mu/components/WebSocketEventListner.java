package com.my_universe.mu.components;

import com.my_universe.mu.model.GameMessage;
import com.my_universe.mu.service.GameStateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@RequiredArgsConstructor
@Log4j2
public class WebSocketEventListner {

    @Autowired
    private GameStateService gameStateService;

    private final SimpMessageSendingOperations messagingTemplate;

    @EventListener
    public void handleWebSocketConnectListener(SessionConnectedEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        // Get custom header
        String username = headerAccessor.getFirstNativeHeader("username");
        log.info("User connected: {}", username);

        if (username != null) {
            GameMessage gameMessage = GameMessage.builder()
                    .type(GameMessage.MessageType.JOIN)
                    .sender(username)
                    .build();
            messagingTemplate.convertAndSend("/topic/chat", gameMessage);

            // Optionally store username in session attributes for disconnect
            headerAccessor.getSessionAttributes().put("username", username);
        }
    }

    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String username = (String) headerAccessor.getSessionAttributes().get("username");
        String id = (String) headerAccessor.getSessionAttributes().get("id");
        log.info("User disconnected: {}", username);

        if (username != null) {
            GameMessage gameMessage = GameMessage.builder()
                    .type(GameMessage.MessageType.LEAVE)
                    .sender(username)
                    .build();
            messagingTemplate.convertAndSend("/topic/chat", gameMessage);
        }

        if (id != null) {
            gameStateService.removePlayer(id);
            log.info("Removed player with id: {}", id);
        } else {
            log.warn("Session disconnect: player id was null, could not remove from game state.");
        }
    }

}
