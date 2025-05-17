package com.my_universe.mu.service;

import com.my_universe.mu.model.Room;

public interface RoomService {

    public Room createRoom(String spaceId, String username, String roomName);

    Room getRoom(String roomId);
}
