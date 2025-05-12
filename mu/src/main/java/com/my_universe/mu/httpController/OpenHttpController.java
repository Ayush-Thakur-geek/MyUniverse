package com.my_universe.mu.httpController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/open")
public class OpenHttpController {
    @GetMapping("/dashboard")
    public String dashboard() {
        return "authenticated/dashboard";
    }
}
