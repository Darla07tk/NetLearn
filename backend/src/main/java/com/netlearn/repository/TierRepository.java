
package com.netlearn.repository;

import com.netlearn.entity.Tier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TierRepository extends JpaRepository<Tier, Long> {

    Optional<Tier> findByTierNumber(Integer tierNumber);
}
