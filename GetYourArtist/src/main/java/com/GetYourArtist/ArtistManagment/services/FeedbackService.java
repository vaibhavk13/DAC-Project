package com.GetYourArtist.ArtistManagment.services;

import java.util.List;

import com.GetYourArtist.ArtistManagment.entities.Feedback;

public interface FeedbackService {

    Feedback saveFeedback(Feedback feedback);

    Feedback getByUserId(String userid);
    
    Feedback getByFeedbackId(String feedbackId);

    List<Feedback> findAll();

    Feedback updateFeedbackByUserId(String userid, Feedback feedback) throws RuntimeException;

    Feedback updateFeedbackByfeedbackId(String feedbackId, Feedback feedback) throws RuntimeException;

    void deleteFeedbackByFeedbackId(String feedbackId) throws RuntimeException;

    void deleteFeedbackByUserId(String userid) throws RuntimeException;
}
