package com.netlearn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "modules")
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private Integer moduleNumber;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    public Module() {
    }

    public Module(Integer moduleNumber, String name, String description) {
        this.moduleNumber = moduleNumber;
        this.name = name;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public Integer getModuleNumber() {
        return moduleNumber;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setModuleNumber(Integer moduleNumber) {
        this.moduleNumber = moduleNumber;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}