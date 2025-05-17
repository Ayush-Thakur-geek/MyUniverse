package com.my_universe.mu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameMessage {

    private MessageType type;
    private String message;
    private String sender;

    public enum MessageType{
        CHAT, MOVEMENT, JOIN, LEAVE
    }
}
