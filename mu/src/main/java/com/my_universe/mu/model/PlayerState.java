package com.my_universe.mu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlayerState {
    private String userId;
    private float x;
    private float y;
    private String avatarId;
}
