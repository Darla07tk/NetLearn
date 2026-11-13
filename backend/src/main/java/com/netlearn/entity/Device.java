package com.netlearn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "devices")
public class Device {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String ipAddress;

    @Column(nullable = false)
    private String macAddress;

    public Device() {
    }

    public Device(String name, String type, String ipAddress, String macAddress) {
        this.name = name;
        this.type = type;
        this.ipAddress = ipAddress;
        this.macAddress = macAddress;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public String getMacAddress() {
        return macAddress;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public void setMacAddress(String macAddress) {
        this.macAddress = macAddress;
    }
}