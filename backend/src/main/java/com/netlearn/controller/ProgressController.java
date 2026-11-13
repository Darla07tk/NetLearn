package com.netlearn.controller;

import com.netlearn.entity.Progress;
import com.netlearn.service.AuthenticatedUserService;
import com.netlearn.service.ProgressService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    private final ProgressService progressService;
    private final AuthenticatedUserService authenticatedUserService;

    public ProgressController(
            ProgressService progressService,
            AuthenticatedUserService authenticatedUserService
    ) {
        this.progressService = progressService;
        this.authenticatedUserService = authenticatedUserService;
    }

    @GetMapping("/{userId}/{moduleId}")
    public ResponseEntity<Progress> getProgress(
            @PathVariable Long userId,
            @PathVariable Long moduleId,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                progressService.getProgress(userId, moduleId)
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Progress>> getUserProgress(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                progressService.getUserProgress(userId)
        );
    }

    @PutMapping("/{userId}/module-number/{moduleNumber}/time")
    public ResponseEntity<Progress> updateTimeProgress(
            @PathVariable Long userId,
            @PathVariable Integer moduleNumber,
            @RequestParam Long timeSpentSeconds,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                progressService.updateTimeProgress(
                        userId,
                        moduleNumber,
                        timeSpentSeconds
                )
        );
    }

    @PutMapping("/{userId}/{moduleId}")
    public ResponseEntity<Progress> updateProgress(
            @PathVariable Long userId,
            @PathVariable Long moduleId,
            @RequestParam Integer completionPercentage,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                progressService.updateProgress(
                        userId,
                        moduleId,
                        completionPercentage
                )
        );
    }

    @PutMapping("/{userId}/module-number/{moduleNumber}")
    public ResponseEntity<Progress> updateProgressByModuleNumber(
            @PathVariable Long userId,
            @PathVariable Integer moduleNumber,
            @RequestParam Integer completionPercentage,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                progressService.updateProgressByModuleNumber(
                        userId,
                        moduleNumber,
                        completionPercentage
                )
        );
    }
}