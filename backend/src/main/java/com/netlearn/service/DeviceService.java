package com.netlearn.service;

import com.netlearn.entity.Device;
import com.netlearn.exception.ResourceNotFoundException;
import com.netlearn.repository.DeviceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceService {

    private final DeviceRepository deviceRepository;

    public DeviceService(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    public Device getDeviceById(Long id) {
        return deviceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Device not found"));
    }

    public Device getDeviceByName(String name) {
        return deviceRepository.findByName(name)
                .orElseThrow(() -> new ResourceNotFoundException("Device not found"));
    }

    public Device saveDevice(Device device) {
        return deviceRepository.save(device);
    }

    public void deleteDevice(Long id) {
        Device device = getDeviceById(id);
        deviceRepository.delete(device);
    }
}