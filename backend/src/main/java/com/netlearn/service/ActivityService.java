package com.netlearn.service;

import com.netlearn.entity.Activity;
import com.netlearn.entity.User;
import com.netlearn.exception.ResourceNotFoundException;
import com.netlearn.repository.ActivityRepository;
import com.netlearn.repository.UserRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;
    private final UserRepository userRepository;

    public ActivityService(
            ActivityRepository activityRepository,
            UserRepository userRepository
    ) {
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
    }

    public List<Activity> getUserActivities(Long userId) {
        return activityRepository
                .findByUserIdOrderByCreatedAtDesc(userId);
    }

    public Activity createActivity(
            Long userId,
            Activity activity
    ) {
        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        activity.setUser(user);
        activity.setCreatedAt(LocalDateTime.now());

        return activityRepository.save(activity);
    }

    public Activity createActivity(
            Long userId,
            String activityType,
            String description
    ) {
        Activity activity = new Activity();

        activity.setActivityType(activityType);
        activity.setDescription(description);

        return createActivity(userId, activity);
    }

    public void deleteActivity(Long id) {
        Activity activity = activityRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Activity not found"
                        )
                );

        activityRepository.delete(activity);
    }

    public void deleteActivity(Long id, Long userId) {
        Activity activity = activityRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Activity not found"
                        )
                );

        if (
                activity.getUser() == null ||
                !activity.getUser().getId().equals(userId)
        ) {
            throw new AccessDeniedException(
                    "You can delete only your own activity records"
            );
        }

        activityRepository.delete(activity);
    }
}