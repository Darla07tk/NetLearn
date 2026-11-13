package com.netlearn.dto;

import java.util.List;

public class GrandTestSubmission {

    private List<Long> questionIds;
    private List<String> answers;

    public GrandTestSubmission() {
    }

    public List<Long> getQuestionIds() {
        return questionIds;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setQuestionIds(List<Long> questionIds) {
        this.questionIds = questionIds;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }
}