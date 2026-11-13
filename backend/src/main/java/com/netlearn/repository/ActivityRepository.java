package com.netlearn.repository;

import com.netlearn.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Long> {

    List<Activity> findByUserIdOrderByCreatedAtDesc(Long userId);
}