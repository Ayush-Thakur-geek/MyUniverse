package com.my_universe.mu.service;

import com.my_universe.mu.model.Room;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class RoomServiceImpl implements RoomService {

    private final ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();

    @Override
    public Room createRoom(String spaceId, String username, String roomName) {
        String roomId = UUID.randomUUID().toString();

        Room room = new Room(
                roomId,
                spaceId,
                roomName,
                username,
                Instant.now()
        );

        rooms.put(roomId, room);


        return room;
    }

    @Override
    public Room getRoom(String roomId) {
        return rooms.get(roomId);
    }
}
