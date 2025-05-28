package com.my_universe.mu.service;

import com.my_universe.mu.entity.Avatar;
import com.my_universe.mu.entity.Role;
import com.my_universe.mu.entity.User;
import com.my_universe.mu.model.RegisterForm;
import com.my_universe.mu.repository.AvatarRepository;
import com.my_universe.mu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private AvatarRepository avatarRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String save(RegisterForm form) {

        Avatar avatar = avatarRepo.findById(form.getAvatarId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Avatar Id"));

        User user = User.builder()
                .email(form.getEmail())
                .password(passwordEncoder.encode(form.getPassword()))
                .username(form.getUsername())
                .role(Role.ROLE_USER)
                .avatar(avatar)
                .build();

        userRepo.save(user);
        return "UserSaved";
    }

    @Override
    public String getAvatarId(String username) {
        Optional<User> user = userRepo.findByUsername(username);
        if (!user.isPresent()) {
            throw new IllegalArgumentException("User not found");
        }

        return user.get().getAvatar().getId();
    }


}
