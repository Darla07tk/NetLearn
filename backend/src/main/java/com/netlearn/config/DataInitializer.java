package com.netlearn.config;

import com.netlearn.entity.Module;
import com.netlearn.entity.Tier;
import com.netlearn.repository.ModuleRepository;
import com.netlearn.repository.TierRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initializeModules(
            ModuleRepository moduleRepository
    ) {
        return args -> {
            createModuleIfMissing(
                    moduleRepository,
                    1,
                    "Network Fundamentals",
                    "Learn the basic concepts and principles of computer networking."
            );

            createModuleIfMissing(
                    moduleRepository,
                    2,
                    "Network Devices",
                    "Explore common devices used to connect and manage computer networks."
            );

            createModuleIfMissing(
                    moduleRepository,
                    3,
                    "OSI Model",
                    "Understand network communication through the seven OSI layers."
            );

            createModuleIfMissing(
                    moduleRepository,
                    4,
                    "IP Addressing",
                    "Learn how IP addresses identify devices and networks."
            );

            createModuleIfMissing(
                    moduleRepository,
                    5,
                    "Routing & Switching",
                    "Understand how routers and switches forward data across networks."
            );

            createModuleIfMissing(
                    moduleRepository,
                    6,
                    "Network Protocols",
                    "Study common networking protocols and their communication workflows."
            );
        };
    }

    @Bean
    CommandLineRunner initializeDefaultTier(
            TierRepository tierRepository
    ) {
        return args -> {
            if (tierRepository.findByTierNumber(1).isEmpty()) {
                Tier tier = new Tier();
                tier.setName("Beginner");
                tier.setTierNumber(1);
                tier.setDescription(
                        "Default tier for saved quiz attempts."
                );

                tierRepository.save(tier);
            }
        };
    }

    private void createModuleIfMissing(
            ModuleRepository moduleRepository,
            int moduleNumber,
            String name,
            String description
    ) {
        if (
                moduleRepository
                        .findByModuleNumber(moduleNumber)
                        .isEmpty()
        ) {
            moduleRepository.save(
                    new Module(
                            moduleNumber,
                            name,
                            description
                    )
            );
        }
    }
}