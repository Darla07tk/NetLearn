package com.netlearn.service;

import com.netlearn.entity.Progress;
import com.netlearn.entity.Module;
import com.netlearn.entity.User;
import com.netlearn.exception.ResourceNotFoundException;
import com.netlearn.repository.ProgressRepository;
import com.netlearn.repository.ModuleRepository;
import com.netlearn.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProgressService {

    private final ProgressRepository progressRepository;
    private final UserRepository userRepository;
    private final ModuleRepository moduleRepository;
    private final ActivityService activityService;

    public ProgressService(
            ProgressRepository progressRepository,
            UserRepository userRepository,
            ModuleRepository moduleRepository,
            ActivityService activityService
    ) {
        this.progressRepository = progressRepository;
        this.userRepository = userRepository;
        this.moduleRepository = moduleRepository;
        this.activityService = activityService;
    }

    public Progress getProgress(
            Long userId,
            Long moduleId
    ) {
        return progressRepository
                .findByUserIdAndModuleId(userId, moduleId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Progress not found"
                        )
                );
    }

    @Transactional
    public List<Progress> getUserProgress(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User not found");
        }

        List<Progress> records =
                progressRepository.findByUserId(userId);

        boolean migrated = false;

        // Initialize missing time values without discarding
        // existing completion percentages.
        for (Progress record : records) {
            if (record.getTimeSpentSeconds() == null) {
                record.setTimeSpentSeconds(0L);
                migrated = true;
            }
        }

        return migrated
                ? progressRepository.saveAll(records)
                : records;
    }

    @Transactional
    public Progress updateTimeProgress(
            Long userId,
            Integer moduleNumber,
            Long timeSpentSeconds
    ) {
        if (
                timeSpentSeconds == null ||
                timeSpentSeconds < 0
        ) {
            throw new IllegalArgumentException(
                    "Time spent must be zero or greater"
            );
        }

        int estimatedSeconds =
                getEstimatedSeconds(moduleNumber);

        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        Module module = moduleRepository
                .findByModuleNumber(moduleNumber)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Module not found"
                        )
                );

        Progress progress = progressRepository
                .findByUserIdAndModuleId(
                        user.getId(),
                        module.getId()
                )
                .orElseGet(Progress::new);

        boolean isNew = progress.getId() == null;

        int previousPercentage =
                progress.getCompletionPercentage() == null
                        ? 0
                        : progress.getCompletionPercentage();

        long previousSeconds =
                progress.getTimeSpentSeconds() == null
                        ? 0L
                        : progress.getTimeSpentSeconds();

        // Never decrease saved time; cap it at 6,000 seconds.
        long savedSeconds = Math.min(
                (long) estimatedSeconds,
                Math.max(previousSeconds, timeSpentSeconds)
        );

        // 60 seconds = 1 percentage point.
        int calculatedPercentage = (int) Math.min(
                100L,
                savedSeconds * 100L / estimatedSeconds
        );

        if (isNew) {
            progress.setUser(user);
            progress.setModule(module);
        }

        // Never decrease existing progress.
        int finalPercentage = Math.max(
                previousPercentage,
                calculatedPercentage
        );

        progress.setTimeSpentSeconds(savedSeconds);
        progress.setCompletionPercentage(finalPercentage);

        Progress saved = progressRepository.save(progress);

        if (
                previousPercentage < 100 &&
                saved.getCompletionPercentage() >= 100
        ) {
            activityService.createActivity(
                    user.getId(),
                    "Module Completed",
                    module.getName() + " module completed"
            );
        }

        return saved;
    }

    private int getEstimatedSeconds(Integer moduleNumber) {
        if (
                moduleNumber == null ||
                moduleNumber < 1 ||
                moduleNumber > 6
        ) {
            throw new IllegalArgumentException(
                    "Invalid module number"
            );
        }

        // Every module uses 100 minutes for full completion.
        return 100 * 60;
    }

    // Original endpoint retained for compatibility.
    public Progress updateProgress(
            Long userId,
            Long moduleId,
            Integer completionPercentage
    ) {
        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        Module module = moduleRepository.findById(moduleId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Module not found"
                        )
                );

        return saveProgress(
                user,
                module,
                completionPercentage
        );
    }

    // Original endpoint retained for compatibility.
    public Progress updateProgressByModuleNumber(
            Long userId,
            Integer moduleNumber,
            Integer completionPercentage
    ) {
        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        Module module = moduleRepository
                .findByModuleNumber(moduleNumber)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Module not found"
                        )
                );

        return saveProgress(
                user,
                module,
                completionPercentage
        );
    }

    private Progress saveProgress(
            User user,
            Module module,
            Integer completionPercentage
    ) {
        int requestedPercentage =
                completionPercentage == null
                        ? 0
                        : Math.max(
                                0,
                                Math.min(100, completionPercentage)
                        );

        Progress progress = progressRepository
                .findByUserIdAndModuleId(
                        user.getId(),
                        module.getId()
                )
                .orElse(null);

        int previousPercentage =
                progress == null ||
                progress.getCompletionPercentage() == null
                        ? 0
                        : progress.getCompletionPercentage();

        if (progress == null) {
            progress = new Progress();
            progress.setUser(user);
            progress.setModule(module);
        }

        progress.setCompletionPercentage(
                Math.max(
                        previousPercentage,
                        requestedPercentage
                )
        );

        Progress saved = progressRepository.save(progress);

        if (
                previousPercentage < 100 &&
                saved.getCompletionPercentage() >= 100
        ) {
            activityService.createActivity(
                    user.getId(),
                    "Module Completed",
                    module.getName() + " module completed"
            );
        }

        return saved;
    }
}