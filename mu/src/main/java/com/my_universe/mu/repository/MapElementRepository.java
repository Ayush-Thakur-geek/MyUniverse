package com.my_universe.mu.repository;

import com.my_universe.mu.entity.MapElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapElementRepository extends JpaRepository<MapElement, String> {
}
