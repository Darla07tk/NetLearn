package com.netlearn.dto;

public class GrandTestResultRequest {

    private Integer score;
    private Integer totalQuestions;

    public GrandTestResultRequest() {
    }

    public Integer getScore() {
        return score;
    }

    public Integer getTotalQuestions() {
        return totalQuestions;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
    }
}