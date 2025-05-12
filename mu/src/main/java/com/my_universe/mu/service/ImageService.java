package com.my_universe.mu.service;

import com.my_universe.mu.entity.Map;
import com.my_universe.mu.model.AssetRequest;
import org.springframework.http.ResponseEntity;

public interface ImageService {
    public ResponseEntity<Map> uploadImage(AssetRequest request);
}
