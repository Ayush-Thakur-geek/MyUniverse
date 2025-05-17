package com.my_universe.mu.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "space")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Space {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    private int width;
    private int height;
    private String thumbnail;

    @OneToMany(mappedBy = "space")
    private List<SpaceElement> elements;
}
