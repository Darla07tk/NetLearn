package com.netlearn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String questionText;

    @Column(name = "optiona", nullable = false)
private String optionA;

@Column(name = "optionb", nullable = false)
private String optionB;

@Column(name = "optionc", nullable = false)
private String optionC;

@Column(name = "optiond", nullable = false)
private String optionD;

    @Column(nullable = false)
    private String correctAnswer;

    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;

    public Question() {
    }

    public Question(String questionText, String optionA, String optionB, String optionC,
                    String optionD, String correctAnswer, Module module) {
        this.questionText = questionText;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.correctAnswer = correctAnswer;
        this.module = module;
    }

    public Long getId() {
        return id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public String getOptionA() {
        return optionA;
    }

    public String getOptionB() {
        return optionB;
    }

    public String getOptionC() {
        return optionC;
    }

    public String getOptionD() {
        return optionD;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public Module getModule() {
        return module;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public void setOptionA(String optionA) {
        this.optionA = optionA;
    }

    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }

    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }

    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public void setModule(Module module) {
        this.module = module;
    }
}