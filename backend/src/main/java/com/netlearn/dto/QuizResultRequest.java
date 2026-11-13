package com.netlearn.dto;

public class QuizResultRequest {

    private Integer moduleNumber;
    private Integer score;
    private Integer totalQuestions;

    public QuizResultRequest() {
    }

    public Integer getModuleNumber() {
        return moduleNumber;
    }

    public Integer getScore() {
        return score;
    }

    public Integer getTotalQuestions() {
        return totalQuestions;
    }

    public void setModuleNumber(Integer moduleNumber) {
        this.moduleNumber = moduleNumber;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
    }
}