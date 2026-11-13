package com.netlearn.controller;

import com.netlearn.entity.Module;
import com.netlearn.service.ModuleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/modules")
public class ModuleController {

    private final ModuleService moduleService;

    public ModuleController(ModuleService moduleService) {
        this.moduleService = moduleService;
    }

    @GetMapping
    public ResponseEntity<List<Module>> getAllModules() {
        return ResponseEntity.ok(moduleService.getAllModules());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Module> getModuleById(@PathVariable Long id) {
        return ResponseEntity.ok(moduleService.getModuleById(id));
    }

    @GetMapping("/number/{moduleNumber}")
    public ResponseEntity<Module> getModuleByNumber(@PathVariable Integer moduleNumber) {
        return ResponseEntity.ok(moduleService.getModuleByNumber(moduleNumber));
    }

    @PostMapping
    public ResponseEntity<Module> createModule(@RequestBody Module module) {
        return ResponseEntity.ok(moduleService.saveModule(module));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModule(@PathVariable Long id) {
        moduleService.deleteModule(id);
        return ResponseEntity.noContent().build();
    }
}