package com.my_universe.mu.httpController;

import com.my_universe.mu.model.Room;
import com.my_universe.mu.model.SpaceRequest;
import com.my_universe.mu.repository.SpaceRepository;
import com.my_universe.mu.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/open")
public class OpenHttpController {

    @Autowired
    SpaceRepository spaceRepo;
    @Autowired
    ImageService imageService;

    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        model.addAttribute("room", new Room());
        model.addAttribute("spaces", spaceRepo.findAll());

        return "authenticated/dashboard";
    }

    @GetMapping("/create-space")
    public String createSpace(Model model) {
        model.addAttribute("space", new SpaceRequest());
        return "authenticated/create-space";
    }

    @PostMapping("/create-space")
    public String createSpace(
            @ModelAttribute("space") SpaceRequest space
    ) {
        System.out.println("test");
        imageService.uploadSpaceThumbnail(space);
        return "redirect:/authenticated/dashboard";
    }

}
