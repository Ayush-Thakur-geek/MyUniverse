package com.my_universe.mu.controller;

import com.my_universe.mu.model.RegisterForm;
import com.my_universe.mu.service.UserService;
import jakarta.validation.Valid;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
public class RestHttpApis {

    @Autowired
    UserService userService;

//    @PostMapping("/register")
//    public ResponseEntity<String> registerUser(
//            @Valid @RequestBody RegisterForm form,
//            BindingResult bindingResult
//            ) {
//        if (bindingResult.hasErrors()) {
//            log.info(bindingResult.getAllErrors());
//        }
//
//        String msg = userService.save(form);
//        return new ResponseEntity<>(msg, HttpStatus.OK);
//
//    }
}
