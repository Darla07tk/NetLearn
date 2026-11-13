package com.netlearn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "progress")
public class Progress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer completionPercentage = 0;

    // Accumulated focused study time in seconds.
    // Nullable temporarily for migrating existing records.
    @Column(name = "time_spent_seconds")
    private Long timeSpentSeconds = 0L;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;

    public Progress() {
    }

    public Progress(
            Integer completionPercentage,
            User user,
            Module module
    ) {
        this.completionPercentage = completionPercentage;
        this.user = user;
        this.module = module;
        this.timeSpentSeconds = 0L;
    }

    public Long getId() {
        return id;
    }

    public Integer getCompletionPercentage() {
        return completionPercentage;
    }

    public Long getTimeSpentSeconds() {
        return timeSpentSeconds;
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

    public void setCompletionPercentage(
            Integer completionPercentage
    ) {
        this.completionPercentage =
                completionPercentage;
    }

    public void setTimeSpentSeconds(
            Long timeSpentSeconds
    ) {
        this.timeSpentSeconds = timeSpentSeconds;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setModule(Module module) {
        this.module = module;
    }
}