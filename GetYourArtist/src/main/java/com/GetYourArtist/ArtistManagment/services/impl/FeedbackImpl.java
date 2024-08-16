package com.GetYourArtist.ArtistManagment.services.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GetYourArtist.ArtistManagment.entities.Feedback;
import com.GetYourArtist.ArtistManagment.repositories.FeedbackRepository;
import com.GetYourArtist.ArtistManagment.services.FeedbackService;

@Service
public class FeedbackImpl implements FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepository;

	@Override
	public Feedback saveFeedback(Feedback feedback) {
		feedback.setFeedbackId(UUID.randomUUID().toString());

		return feedbackRepository.save(feedback);
	}

	public Feedback getByUserId(String userId) {
		return feedbackRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("Feedback not found for user id: " + userId));
	}

	@Override
	public Feedback getByFeedbackId(String feedbackId) {

		return feedbackRepository.findById(feedbackId)
				.orElseThrow(() -> new RuntimeException("Feedback not found for feedback id: " + feedbackId));
	}

	@Override
	public List<Feedback> findAll() {
		return feedbackRepository.findAll();
	}

	@Override
	public Feedback updateFeedbackByUserId(String userid, Feedback feedback) throws RuntimeException {
		Feedback feedbackFound = feedbackRepository.findById(userid)
				.orElseThrow(() -> new RuntimeException("Feedback not found for this id: " + userid));

		feedbackFound.setOverallExperience(feedback.getOverallExperience());
		feedbackFound.setFeedbackType(feedback.getFeedbackType());
		feedbackFound.setFeedbackDescription(feedback.getFeedbackDescription());
		feedbackFound.setEmail(feedback.getEmail());

		Feedback updatedFeedback = feedbackRepository.save(feedback);
		return updatedFeedback;

	}

	public Feedback updateFeedbackByfeedbackId(String feedbackId, Feedback feedback) throws RuntimeException {

		Feedback feedbackFound = feedbackRepository.findById(feedbackId)
				.orElseThrow(() -> new RuntimeException("Feedback not found for this id: " + feedbackId));

		feedbackFound.setOverallExperience(feedback.getOverallExperience());
		feedbackFound.setFeedbackType(feedback.getFeedbackType());
		feedbackFound.setFeedbackDescription(feedback.getFeedbackDescription());
		feedbackFound.setEmail(feedback.getEmail());

		Feedback updatedFeedback = feedbackRepository.save(feedbackFound);
		return updatedFeedback;

	}

	@Override
	public void deleteFeedbackByFeedbackId(String feedbackId) throws RuntimeException {
		Feedback feedbackFound = feedbackRepository.findById(feedbackId)
				.orElseThrow(() -> new RuntimeException("Feedback not found for this id: " + feedbackId));

		feedbackRepository.deleteById(feedbackId);
	}

	public void deleteFeedbackByUserId(String userid) throws RuntimeException {

		Feedback feedbackFound = feedbackRepository.findById(userid)
				.orElseThrow(() -> new RuntimeException("Feedback not found for this id: " + userid));

		feedbackRepository.deleteById(userid);

	}

}
