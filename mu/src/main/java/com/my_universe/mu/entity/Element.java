package com.my_universe.mu.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "element")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Element {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private int width;
    private int height;
    private String imageUrl;
}