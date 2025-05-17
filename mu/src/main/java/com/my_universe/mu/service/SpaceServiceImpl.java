package com.my_universe.mu.service;

import com.my_universe.mu.entity.Space;
import com.my_universe.mu.model.SpaceRequest;
import com.my_universe.mu.repository.SpaceRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class SpaceServiceImpl implements SpaceService {

    @Autowired
    private SpaceRepository spaceRepo;

    @Override
    public String save(SpaceRequest spaceRequest) {
        Space space = Space.builder()
                .id(spaceRequest.getSpaceId())
                .name(spaceRequest.getSpaceName())
                .width(spaceRequest.getWidth())
                .height(spaceRequest.getHeight())
                .build();

        String id = spaceRepo.save(space).getId();
        log.info("Saving space: {}", space);
        return id;
    }
}
