package com.my_universe.mu.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "map")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Map {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private int width;
    private int height;
    private String name;

    @OneToMany(mappedBy = "map")
    private List<MapElement> elements;
}

