package com.my_universe.mu.validator;

import com.my_universe.mu.annotations.Unique;
import com.my_universe.mu.repository.UserRepository;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UniqueValidator implements ConstraintValidator<Unique, String> {

    @Autowired
    private UserRepository userRepo;

    private String field;

    @Override
    public void initialize(Unique constraintAnnotation) {
//        ConstraintValidator.super.initialize(constraintAnnotation);
        this.field = constraintAnnotation.field();
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        if (s == null) return true;

        return switch (field) {
            case "email" -> !userRepo.existsByEmail(s);
            case "username" -> !userRepo.existsByUsername(s);
            default -> throw new IllegalStateException("Unexpected value: " + field);
        };
    }
}
