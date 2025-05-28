package com.my_universe.mu.service;

import com.my_universe.mu.model.RegisterForm;

public interface UserService {
    public String save(RegisterForm form);

    public String getAvatarId(String username);
}
