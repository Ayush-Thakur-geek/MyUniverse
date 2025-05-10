package com.my_universe.mu.service;

import com.my_universe.mu.entity.Avatar;
import com.my_universe.mu.entity.Role;
import com.my_universe.mu.entity.User;
import com.my_universe.mu.model.RegisterForm;
import com.my_universe.mu.repository.AvatarRepository;
import com.my_universe.mu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private AvatarRepository avatarRepo;

    @Override
    public String save(RegisterForm form) {

        Avatar avatar = avatarRepo.findById(form.getAvatarId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Avatar Id"));

        User user = User.builder()
                .email(form.getEmail())
                .password(form.getPassword())
                .username(form.getUsername())
                .role(Role.USER)
                .avatar(avatar)
                .build();

        userRepo.save(user);
        return "UserSaved";
    }
}
