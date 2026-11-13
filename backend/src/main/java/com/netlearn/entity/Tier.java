
package com.netlearn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tiers")
public class Tier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "tier_number", nullable = false, unique = true)
    private Integer tierNumber;

    @Column(columnDefinition = "TEXT")
    private String description;

    public Tier() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getTierNumber() {
        return tierNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTierNumber(Integer tierNumber) {
        this.tierNumber = tierNumber;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
