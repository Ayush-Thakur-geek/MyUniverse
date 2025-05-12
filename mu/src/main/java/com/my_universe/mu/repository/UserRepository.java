package com.my_universe.mu.repository;

import com.my_universe.mu.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByUsername(String s);

    boolean existsByEmail(String s);

    Optional<User> findByUsername(String username);
}
