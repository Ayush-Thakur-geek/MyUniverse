package com.my_universe.mu.model;

import com.my_universe.mu.annotations.Unique;
import com.my_universe.mu.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterForm {

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Unique(message = "Email already registered", field = "email")
    private String email;

    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 20, message = "Username must be 3-20 characters")
    @Pattern(regexp = "^[a-z0-9]+$", message = "Username must be lowercase and contain no spaces")
    @Unique(message = "Username already taken", field = "username")
    private String username;

    @NotBlank(message = "Please fill it")
    @Pattern(
            regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&(){}:;',?/*~$^+=<>-]).{8,20}$",
            message = "Password must be 8-20 characters long, include at least one digit, one lowercase, one uppercase, and one special character"
    )
    private String password;

    private String avatarId;
}
