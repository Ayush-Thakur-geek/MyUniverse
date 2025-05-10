package com.my_universe.mu.repository;

import com.my_universe.mu.entity.Element;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ElementRepository extends JpaRepository<Element, Integer> {
}
