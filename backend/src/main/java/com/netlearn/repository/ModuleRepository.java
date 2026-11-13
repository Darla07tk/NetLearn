package com.netlearn.repository;

import com.netlearn.entity.Module;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ModuleRepository extends JpaRepository<Module, Long> {

    Optional<Module> findByModuleNumber(Integer moduleNumber);
}