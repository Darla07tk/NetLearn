CREATE DATABASE IF NOT EXISTS netlearn;

USE netlearn;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE modules (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    module_number INT NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE tiers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tier_number INT NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE lessons (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    module_id BIGINT NOT NULL,
    FOREIGN KEY (module_id) REFERENCES modules(id)
);

CREATE TABLE questions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT NOT NULL,
    optiona VARCHAR(255) NOT NULL,
    optionb VARCHAR(255) NOT NULL,
    optionc VARCHAR(255) NOT NULL,
    optiond VARCHAR(255) NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    module_id BIGINT NOT NULL,
    FOREIGN KEY (module_id) REFERENCES modules(id)
);

CREATE TABLE quiz_results (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    tier_id BIGINT NOT NULL,
    module_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (tier_id) REFERENCES tiers(id),
    FOREIGN KEY (module_id) REFERENCES modules(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE progress (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    completion_percentage INT NOT NULL DEFAULT 0,
    time_spent_seconds BIGINT NOT NULL DEFAULT 0,
    module_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (module_id) REFERENCES modules(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE KEY uq_progress_user_module (user_id, module_id)
);

CREATE TABLE activities (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    activity_type VARCHAR(255) NOT NULL,
    created_at DATETIME(6) NOT NULL,
    description VARCHAR(255) NOT NULL,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE grand_test_results (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE devices (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    ip_address VARCHAR(255) NOT NULL,
    mac_address VARCHAR(255) NOT NULL
);