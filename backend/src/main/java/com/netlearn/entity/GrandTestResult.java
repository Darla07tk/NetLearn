package com.netlearn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "grand_test_results")
public class GrandTestResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer score;

    @Column(nullable = false)
    private Integer totalQuestions;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public GrandTestResult() {
    }

    public GrandTestResult(Integer score, Integer totalQuestions, User user) {
        this.score = score;
        this.totalQuestions = totalQuestions;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public Integer getScore() {
        return score;
    }

    public Integer getTotalQuestions() {
        return totalQuestions;
    }

    public User getUser() {
        return user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
    }

    public void setUser(User user) {
        this.user = user;
    }
}