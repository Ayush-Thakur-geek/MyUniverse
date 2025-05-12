package com.my_universe.mu.httpController;

import com.my_universe.mu.entity.Map;
import com.my_universe.mu.model.AssetRequest;
import com.my_universe.mu.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminRestHttpApis {

    @Autowired
    private ImageService imageService;

    @PostMapping("/set-avatar")
    public ResponseEntity<Map> setAvatar(AssetRequest asset) {
        try {
            return imageService.uploadImage(asset);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
