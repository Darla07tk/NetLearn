
package com.netlearn.service;

import com.netlearn.dto.QuizResultRequest;
import com.netlearn.dto.QuizSubmission;
import com.netlearn.entity.Question;
import com.netlearn.entity.QuizResult;
import com.netlearn.entity.Module;
import com.netlearn.entity.Tier;
import com.netlearn.entity.User;
import com.netlearn.exception.ResourceNotFoundException;
import com.netlearn.repository.QuestionRepository;
import com.netlearn.repository.QuizResultRepository;
import com.netlearn.repository.ModuleRepository;
import com.netlearn.repository.TierRepository;
import com.netlearn.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class QuizService {

    private static final int DEFAULT_TIER_NUMBER = 1;

    private final QuestionRepository questionRepository;
    private final QuizResultRepository quizResultRepository;
    private final ModuleRepository moduleRepository;
    private final TierRepository tierRepository;
    private final UserRepository userRepository;
    private final ActivityService activityService;

    public QuizService(
            QuestionRepository questionRepository,
            QuizResultRepository quizResultRepository,
            ModuleRepository moduleRepository,
            TierRepository tierRepository,
            UserRepository userRepository,
            ActivityService activityService
    ) {
        this.questionRepository = questionRepository;
        this.quizResultRepository = quizResultRepository;
        this.moduleRepository = moduleRepository;
        this.tierRepository = tierRepository;
        this.userRepository = userRepository;
        this.activityService = activityService;
    }

    public List<Question> getQuestionsByModule(Long moduleId) {
        if (!moduleRepository.existsById(moduleId)) {
            throw new ResourceNotFoundException("Module not found");
        }

        return questionRepository.findByModuleId(moduleId);
    }

    @Transactional
    public QuizResult submitQuiz(
            Long userId,
            QuizSubmission submission
    ) {
        if (submission == null || submission.getModuleId() == null) {
            throw new IllegalArgumentException(
                    "Module ID is required"
            );
        }

        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        Module module = moduleRepository
                .findById(submission.getModuleId())
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Module not found"
                        )
                );

        List<Long> questionIds = submission.getQuestionIds();
        List<String> answers = submission.getAnswers();

        if (questionIds == null
                || answers == null
                || questionIds.isEmpty()
                || questionIds.size() != answers.size()) {
            throw new IllegalArgumentException(
                    "Invalid quiz submission"
            );
        }

        int score = 0;

        for (int i = 0; i < questionIds.size(); i++) {
            Long questionId = questionIds.get(i);

            if (questionId == null) {
                throw new IllegalArgumentException(
                        "Question ID cannot be empty"
                );
            }

            Question question = questionRepository
                    .findById(questionId)
                    .orElseThrow(
                            () -> new ResourceNotFoundException(
                                    "Question not found"
                            )
                    );

            if (question.getModule() == null
                    || !question.getModule().getId()
                    .equals(module.getId())) {
                throw new IllegalArgumentException(
                        "Question does not belong to the selected module"
                );
            }

            String submittedAnswer = answers.get(i);

            if (submittedAnswer != null
                    && question.getCorrectAnswer() != null
                    && question.getCorrectAnswer()
                    .equalsIgnoreCase(submittedAnswer.trim())) {
                score++;
            }
        }

        return saveQuizResult(
                user,
                module,
                score,
                questionIds.size()
        );
    }

    @Transactional
    public QuizResult saveQuizResult(
            Long userId,
            QuizResultRequest request
    ) {
        if (request == null || request.getModuleNumber() == null) {
            throw new IllegalArgumentException(
                    "Module number is required"
            );
        }

        User user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "User not found"
                        )
                );

        Module module = moduleRepository
                .findByModuleNumber(request.getModuleNumber())
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Module not found"
                        )
                );

        int score = validateScore(
                request.getScore(),
                request.getTotalQuestions()
        );

        return saveQuizResult(
                user,
                module,
                score,
                request.getTotalQuestions()
        );
    }

    private QuizResult saveQuizResult(
            User user,
            Module module,
            int score,
            int totalQuestions
    ) {
        Tier tier = tierRepository
                .findByTierNumber(DEFAULT_TIER_NUMBER)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Beginner tier not found"
                        )
                );

        QuizResult result = new QuizResult(
                score,
                totalQuestions,
                tier,
                user,
                module
        );

        QuizResult savedResult =
                quizResultRepository.save(result);

        activityService.createActivity(
                user.getId(),
                "Quiz Completed",
                module.getName() + " quiz completed"
        );

        return savedResult;
    }

    private int validateScore(
            Integer score,
            Integer totalQuestions
    ) {
        if (score == null
                || totalQuestions == null
                || totalQuestions <= 0
                || score < 0
                || score > totalQuestions) {
            throw new IllegalArgumentException(
                    "Invalid quiz result"
            );
        }

        return score;
    }

    public List<QuizResult> getUserQuizResults(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User not found");
        }

        return quizResultRepository.findByUserId(userId);
    }
}
