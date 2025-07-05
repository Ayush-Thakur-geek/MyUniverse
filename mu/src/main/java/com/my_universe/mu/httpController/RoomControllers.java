package com.my_universe.mu.httpController;

import com.my_universe.mu.model.Room;
import com.my_universe.mu.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Controller
@RequestMapping("/app/rooms")
public class RoomControllers {

    @Autowired
    private RoomService roomService;

    @PostMapping("/create-room")
    public String createRoom(
            @ModelAttribute Room room,
            Principal principal
    ) {

        String username = principal.getName();
        System.out.println(principal.getName() + " " + room.getSpaceId());
        Room savedRoom = roomService.createRoom(room.getSpaceId(), username, room.getRoomName());

        return "redirect:/app/rooms/"+savedRoom.getRoomId();
    }

    @GetMapping("/{roomId}")
    public String getRoomDetails(
            @PathVariable String roomId,
            Principal principal
    ) {

        Room room = roomService.getRoom(roomId);
        System.out.println(room.getSpaceId() + " " + room.getUsername() + " " + room.getRoomName() + " " + room.getCreatedAt());

        return "authenticated/canvas";

    }
}
