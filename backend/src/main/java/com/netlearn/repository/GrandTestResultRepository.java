package com.netlearn.repository;

import com.netlearn.entity.GrandTestResult;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GrandTestResultRepository extends JpaRepository<GrandTestResult, Long> {

    List<GrandTestResult> findByUserIdOrderByIdDesc(Long userId);
}