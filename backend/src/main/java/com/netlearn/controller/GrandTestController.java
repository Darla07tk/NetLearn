package com.netlearn.controller;

import com.netlearn.dto.GrandTestResultRequest;
import com.netlearn.dto.GrandTestSubmission;
import com.netlearn.entity.GrandTestResult;
import com.netlearn.service.AuthenticatedUserService;
import com.netlearn.service.GrandTestService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grand-test")
public class GrandTestController {

    private final GrandTestService grandTestService;
    private final AuthenticatedUserService authenticatedUserService;

    public GrandTestController(
            GrandTestService grandTestService,
            AuthenticatedUserService authenticatedUserService
    ) {
        this.grandTestService = grandTestService;
        this.authenticatedUserService = authenticatedUserService;
    }

    @PostMapping("/submit/{userId}")
    public ResponseEntity<GrandTestResult> submitGrandTest(
            @PathVariable Long userId,
            @RequestBody GrandTestSubmission submission,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                grandTestService.submitGrandTest(
                        userId,
                        submission
                )
        );
    }

    @PostMapping("/result/{userId}")
    public ResponseEntity<GrandTestResult> saveGrandTestResult(
            @PathVariable Long userId,
            @RequestBody GrandTestResultRequest request,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                grandTestService.saveGrandTestResult(
                        userId,
                        request
                )
        );
    }

    @GetMapping("/results/{userId}")
    public ResponseEntity<List<GrandTestResult>> getUserResults(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                grandTestService.getUserResults(userId)
        );
    }
}