package com.netlearn.controller;

import com.netlearn.dto.QuizResultRequest;
import com.netlearn.dto.QuizSubmission;
import com.netlearn.entity.Question;
import com.netlearn.entity.QuizResult;
import com.netlearn.service.AuthenticatedUserService;
import com.netlearn.service.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizService quizService;
    private final AuthenticatedUserService authenticatedUserService;

    public QuizController(
            QuizService quizService,
            AuthenticatedUserService authenticatedUserService
    ) {
        this.quizService = quizService;
        this.authenticatedUserService = authenticatedUserService;
    }

    @GetMapping("/module/{moduleId}")
    public ResponseEntity<List<Question>> getQuestionsByModule(
            @PathVariable Long moduleId
    ) {
        return ResponseEntity.ok(
                quizService.getQuestionsByModule(moduleId)
        );
    }

    @PostMapping("/submit/{userId}")
    public ResponseEntity<QuizResult> submitQuiz(
            @PathVariable Long userId,
            @RequestBody QuizSubmission submission,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                quizService.submitQuiz(userId, submission)
        );
    }

    @PostMapping("/result/{userId}")
    public ResponseEntity<QuizResult> saveQuizResult(
            @PathVariable Long userId,
            @RequestBody QuizResultRequest request,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                quizService.saveQuizResult(userId, request)
        );
    }

    @GetMapping("/results/{userId}")
    public ResponseEntity<List<QuizResult>> getUserQuizResults(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails principal
    ) {
        authenticatedUserService.requireUser(
                userId,
                principal.getUsername()
        );

        return ResponseEntity.ok(
                quizService.getUserQuizResults(userId)
        );
    }
}