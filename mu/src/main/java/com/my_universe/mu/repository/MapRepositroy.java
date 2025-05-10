package com.my_universe.mu.repository;

import com.my_universe.mu.entity.Map;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepositroy extends JpaRepository<Map, String> {
}
