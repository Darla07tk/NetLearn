package com.netlearn.service;

import com.netlearn.entity.User;
import com.netlearn.exception.ResourceNotFoundException;
import com.netlearn.repository.UserRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticatedUserService {

    private final UserRepository userRepository;

    public AuthenticatedUserService(
            UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }

    public User requireUser(
            Long requestedUserId,
            String authenticatedEmail
    ) {
        User authenticatedUser = userRepository
                .findByEmail(authenticatedEmail)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Authenticated user not found"
                        )
                );

        if (
                requestedUserId == null ||
                !authenticatedUser.getId().equals(requestedUserId)
        ) {
            throw new AccessDeniedException(
                    "You can access only your own NetLearn data"
            );
        }

        return authenticatedUser;
    }

    public User requireAuthenticatedUser(
            String authenticatedEmail
    ) {
        return userRepository
                .findByEmail(authenticatedEmail)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Authenticated user not found"
                        )
                );
    }
}