package com.netlearn.service;

import com.netlearn.dto.GrandTestResultRequest;
import com.netlearn.dto.GrandTestSubmission;
import com.netlearn.entity.GrandTestResult;
import com.netlearn.entity.Question;
import com.netlearn.entity.User;
import com.netlearn.exception.ResourceNotFoundException;
import com.netlearn.repository.GrandTestResultRepository;
import com.netlearn.repository.QuestionRepository;
import com.netlearn.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrandTestService {

    private final GrandTestResultRepository grandTestResultRepository;
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;
    private final ActivityService activityService;

    public GrandTestService(
            GrandTestResultRepository grandTestResultRepository,
            QuestionRepository questionRepository,
            UserRepository userRepository,
            ActivityService activityService
    ) {
        this.grandTestResultRepository = grandTestResultRepository;
        this.questionRepository = questionRepository;
        this.userRepository = userRepository;
        this.activityService = activityService;
    }

    public GrandTestResult submitGrandTest(
            Long userId,
            GrandTestSubmission submission
    ) {
        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        List<Long> questionIds =
                submission.getQuestionIds();

        List<String> answers =
                submission.getAnswers();

        if (
                questionIds == null
                        || answers == null
                        || questionIds.size()
                        != answers.size()
        ) {
            throw new IllegalArgumentException(
                    "Invalid Grand Test submission"
            );
        }

        int score = 0;

        for (int i = 0; i < questionIds.size(); i++) {
            Question question =
                    questionRepository.findById(
                            questionIds.get(i)
                    ).orElseThrow(
                            () -> new ResourceNotFoundException(
                                    "Question not found"
                            )
                    );

            if (
                    question.getCorrectAnswer()
                            .equalsIgnoreCase(
                                    answers.get(i)
                            )
            ) {
                score++;
            }
        }

        return saveGrandTestResult(
                user,
                score,
                questionIds.size()
        );
    }

    public GrandTestResult saveGrandTestResult(
            Long userId,
            GrandTestResultRequest request
    ) {
        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        if (
                request.getScore() == null
                        || request.getTotalQuestions() == null
                        || request.getTotalQuestions() <= 0
                        || request.getScore() < 0
                        || request.getScore()
                        > request.getTotalQuestions()
        ) {
            throw new IllegalArgumentException(
                    "Invalid Grand Test result"
            );
        }

        return saveGrandTestResult(
                user,
                request.getScore(),
                request.getTotalQuestions()
        );
    }

    private GrandTestResult saveGrandTestResult(
            User user,
            int score,
            int totalQuestions
    ) {
        GrandTestResult result =
                new GrandTestResult();

        result.setUser(user);
        result.setScore(score);
        result.setTotalQuestions(totalQuestions);

        GrandTestResult savedResult =
                grandTestResultRepository.save(result);

        activityService.createActivity(
                user.getId(),
                "Grand Test Completed",
                "Grand Test completed"
        );

        return savedResult;
    }

    public List<GrandTestResult> getUserResults(
            Long userId
    ) {
        return grandTestResultRepository
                .findByUserIdOrderByIdDesc(userId);
    }
}