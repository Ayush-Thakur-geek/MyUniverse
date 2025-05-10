package com.my_universe.mu.repository;

import com.my_universe.mu.entity.SpaceElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpaceElementRepository extends JpaRepository<SpaceElement, String> {
}
