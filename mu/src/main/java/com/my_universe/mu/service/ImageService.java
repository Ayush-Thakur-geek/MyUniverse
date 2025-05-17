package com.my_universe.mu.service;

import com.my_universe.mu.entity.Map;
import com.my_universe.mu.model.AssetRequest;
import com.my_universe.mu.model.SpaceRequest;
import org.springframework.http.ResponseEntity;

public interface ImageService {
    public ResponseEntity<Map> uploadImage(AssetRequest request);
    public ResponseEntity<Map> uploadSpaceThumbnail(SpaceRequest spaceRequest);
}
