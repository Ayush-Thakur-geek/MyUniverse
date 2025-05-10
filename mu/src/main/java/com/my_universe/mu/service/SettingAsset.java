package com.my_universe.mu.service;

import com.my_universe.mu.entity.Avatar;
import com.my_universe.mu.model.AssetRequest;
import com.my_universe.mu.repository.AvatarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SettingAsset implements SettingAssets{

    @Autowired
    private AvatarRepository avatarRepo;

    @Override
    public String saveAvatar(AssetRequest asset) {
        Avatar avatar = Avatar.builder()
                .name(asset.getImageName())
                .imageUrl(asset.getImageUrl())
                .build();

        String id = avatarRepo.save(avatar).getId();
        return id;
    }
}
