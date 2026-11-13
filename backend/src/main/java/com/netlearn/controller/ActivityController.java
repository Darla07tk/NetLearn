package com.netlearn.controller;

import com.netlearn.entity.Activity;
import com.netlearn.service.ActivityService;
import com.netlearn.service.AuthenticatedUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    private final ActivityService activityService;
    private final AuthenticatedUserService authenticatedUserService;

    public ActivityController(
            ActivityService activityService,
            AuthenticatedUserService authenticatedUserService
    ) {
        this.activityService = activityService;
        this.authenticatedUserService = authenticatedUserService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Activity>> getUserActivities(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                activityService.getUserActivities(userId)
        );
    }

    @PostMapping("/{userId}")
    public ResponseEntity<Activity> createActivity(
            @PathVariable Long userId,
            @RequestBody Activity activity,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                activityService.createActivity(userId, activity)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActivity(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails principal
    ) {
        Long userId = authenticatedUserService
                .requireAuthenticatedUser(principal.getUsername())
                .getId();

        activityService.deleteActivity(id, userId);

        return ResponseEntity.noContent().build();
    }
}