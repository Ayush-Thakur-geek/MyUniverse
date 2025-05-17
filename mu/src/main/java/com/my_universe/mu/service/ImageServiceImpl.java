package com.my_universe.mu.service;

import com.my_universe.mu.entity.Avatar;
import com.my_universe.mu.entity.Map;
import com.my_universe.mu.entity.Space;
import com.my_universe.mu.model.AssetRequest;
import com.my_universe.mu.model.SpaceRequest;
import com.my_universe.mu.repository.AvatarRepository;
import com.my_universe.mu.repository.SpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    private CloudinaryService cloudinaryService;
    @Autowired
    private AvatarRepository avatarRepo;
    @Autowired
    private SpaceRepository spaceRepo;

    @Override
    public ResponseEntity<Map> uploadImage(AssetRequest request) {
        try {
            if (request.getImageName().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            if (request.getFile().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }

            Avatar avatar = new Avatar();
            avatar.setName(request.getImageName());
            avatar.setImageUrl(cloudinaryService.uploadImage(request.getFile(), request.getImageName()));
            if (avatar.getImageUrl() == null) {
                return ResponseEntity.badRequest().build();
            }
            avatarRepo.save(avatar);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public ResponseEntity<Map> uploadSpaceThumbnail(SpaceRequest spaceRequest) {
        try {
            if (spaceRequest.getSpaceName().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            if (spaceRequest.getThumbnail().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            if (spaceRequest.getWidth() == 0 || spaceRequest.getHeight() == 0) {
                return ResponseEntity.badRequest().build();
            }
            Space space = Space.builder()
                    .name(spaceRequest.getSpaceName())
                    .width(spaceRequest.getWidth())
                    .height(spaceRequest.getHeight())
                    .thumbnail(cloudinaryService.uploadImage(spaceRequest.getThumbnail(), spaceRequest.getSpaceName()))
                    .build();

            spaceRepo.save(space);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
