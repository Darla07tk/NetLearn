package com.netlearn.repository;

import com.netlearn.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProgressRepository extends JpaRepository<Progress, Long> {

    Optional<Progress> findByUserIdAndModuleId(Long userId, Long moduleId);

    List<Progress> findByUserId(Long userId);
}