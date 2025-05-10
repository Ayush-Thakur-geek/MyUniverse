package com.my_universe.mu.controller;

import com.my_universe.mu.model.AssetRequest;
import com.my_universe.mu.service.SettingAssets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserRestHttpApis {

    @Autowired
    private SettingAssets setAssets;

    @PostMapping("/set/avatar")
    public ResponseEntity<String> setAvatar(@RequestBody AssetRequest asset) {
        String id = setAssets.saveAvatar(asset);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
