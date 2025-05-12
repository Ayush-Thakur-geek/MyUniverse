package com.my_universe.mu.httpController;

import com.my_universe.mu.model.RegisterForm;
import com.my_universe.mu.repository.AvatarRepository;
import com.my_universe.mu.service.UserService;
import jakarta.validation.Valid;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Log4j2
public class ViewController {

    @Autowired
    private UserService userService;
    @Autowired
    private AvatarRepository avatarRepo;

    @GetMapping("/home")
    public String home() {
        return "home";
    }

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("registerInfo", new RegisterForm());
        model.addAttribute("avatars", avatarRepo.findAll());
        return "register";
    }

    @PostMapping("/register")
    public String register(
            @Valid @ModelAttribute("registerInfo") RegisterForm registerForm,
            BindingResult bindingResult,
            Model model
    ) {
        System.out.println("registerForm.toString()");
        if (bindingResult.hasErrors()) {
            log.info("Validation errors: {}", bindingResult.getAllErrors());
            model.addAttribute("avatars", avatarRepo.findAll()); // Re-add avatars to model
            return "register"; // Return to form with errors
        }

        userService.save(registerForm);
        return "redirect:/authenticated/dashboard"; // Redirect on success
    }
}
