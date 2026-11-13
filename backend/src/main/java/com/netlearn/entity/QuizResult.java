
package com.netlearn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_results")
public class QuizResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer score;

    @Column(name = "total_questions", nullable = false)
    private Integer totalQuestions;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tier_id", nullable = false)
    private Tier tier;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;

    public QuizResult() {
    }

    public QuizResult(
            Integer score,
            Integer totalQuestions,
            Tier tier,
            User user,
            Module module
    ) {
        this.score = score;
        this.totalQuestions = totalQuestions;
        this.tier = tier;
        this.user = user;
        this.module = module;
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

    public Tier getTier() {
        return tier;
    }

    public User getUser() {
        return user;
    }

    public Module getModule() {
        return module;
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

    public void setTier(Tier tier) {
        this.tier = tier;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setModule(Module module) {
        this.module = module;
    }
}
