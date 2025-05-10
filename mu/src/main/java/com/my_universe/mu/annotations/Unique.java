package com.my_universe.mu.annotations;

import com.my_universe.mu.validator.UniqueValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = UniqueValidator.class)
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Unique {
    String message() default "This value must be unique";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

    String field();
}
