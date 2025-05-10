package com.my_universe.mu.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "map_elem")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MapElement {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    @JoinColumn(name = "map_id")
    private Map map;

    @ManyToOne
    @JoinColumn(name = "element_id")
    private Element element;

    private Integer x;
    private Integer y;
}