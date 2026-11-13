package com.netlearn.service;

import com.netlearn.entity.Module;
import com.netlearn.exception.ResourceNotFoundException;
import com.netlearn.repository.ModuleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleService {

    private final ModuleRepository moduleRepository;

    public ModuleService(ModuleRepository moduleRepository) {
        this.moduleRepository = moduleRepository;
    }

    public List<Module> getAllModules() {
        return moduleRepository.findAll();
    }

    public Module getModuleById(Long id) {
        return moduleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Module not found"));
    }

    public Module getModuleByNumber(Integer moduleNumber) {
        return moduleRepository.findByModuleNumber(moduleNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Module not found"));
    }

    public Module saveModule(Module module) {
        return moduleRepository.save(module);
    }

    public void deleteModule(Long id) {
        Module module = getModuleById(id);
        moduleRepository.delete(module);
    }
}