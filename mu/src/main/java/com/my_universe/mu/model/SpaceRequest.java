package com.my_universe.mu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SpaceRequest {
    private String spaceId;
    private String spaceName;
    private int width;
    private int height;
    private MultipartFile thumbnail;
}
