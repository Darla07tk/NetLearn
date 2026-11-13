package com.netlearn.dto;

import java.util.List;

public class QuizSubmission {

    private Long moduleId;
    private List<Long> questionIds;
    private List<String> answers;

    public QuizSubmission() {
    }

    public Long getModuleId() {
        return moduleId;
    }

    public List<Long> getQuestionIds() {
        return questionIds;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setModuleId(Long moduleId) {
        this.moduleId = moduleId;
    }

    public void setQuestionIds(List<Long> questionIds) {
        this.questionIds = questionIds;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }
}