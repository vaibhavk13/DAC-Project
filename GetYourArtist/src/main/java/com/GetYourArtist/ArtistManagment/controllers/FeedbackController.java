package com.GetYourArtist.ArtistManagment.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.GetYourArtist.ArtistManagment.entities.Feedback;
import com.GetYourArtist.ArtistManagment.services.FeedbackService;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	private FeedbackService feedbackService;

	// Create feedback
	@PostMapping
	public ResponseEntity<Feedback> submitFeedback(@RequestBody Feedback feedback) {
		Feedback savedFeedback = feedbackService.saveFeedback(feedback);
		return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
	}

//	// Update feedback by user ID
//	@PutMapping("/feedback/{userId}")
//	public ResponseEntity<Feedback> updateFeedbackByUserId(@PathVariable("userId") String userId,
//			@RequestBody Feedback feedback) {
//		Feedback updatedFeedback = feedbackService.updateFeedbackByUserId(userId, feedback);
//		return new ResponseEntity<>(updatedFeedback, HttpStatus.OK);
//	}

	// Update feedback by feedback ID
	@PutMapping("/{feedbackId}")
	public ResponseEntity<Feedback> updateFeedbackByFeedbackId(@PathVariable("feedbackId") String feedbackId,
			@RequestBody Feedback feedback) {
		Feedback updatedFeedback = feedbackService.updateFeedbackByfeedbackId(feedbackId, feedback);
		return new ResponseEntity<>(updatedFeedback, HttpStatus.OK);
	}

	// Delete feedback by feedback ID
	@DeleteMapping("/{feedbackId}")
	public ResponseEntity<String> deleteFeedback(@PathVariable("feedbackId") String feedbackId) {
		feedbackService.deleteFeedbackByFeedbackId(feedbackId);
		return new ResponseEntity<>("Feedback deleted successfully!", HttpStatus.NO_CONTENT);
	}

//	// Delete feedback by user ID
//	@DeleteMapping("/user/{userId}")
//	public ResponseEntity<String> deleteFeedbackByUserId(@PathVariable("userId") String userId) {
//		feedbackService.deleteFeedbackByUserId(userId);
//		return new ResponseEntity<>("Feedback deleted successfully!", HttpStatus.NO_CONTENT);
//	}

	// Get all feedback
	@GetMapping
	public ResponseEntity<List<Feedback>> getAllFeedback() {
		List<Feedback> feedbackList = feedbackService.findAll();
		return new ResponseEntity<>(feedbackList, HttpStatus.OK);
	}

//	// Get feedback by user ID
//	@GetMapping("/user/{userId}")
//	public ResponseEntity<Feedback> getByUserId(@PathVariable("userId") String userId) {
//		Feedback feedback = feedbackService.getByUserId(userId);
//		return new ResponseEntity<>(feedback, HttpStatus.OK);
//	}

	// Get feedback by feedback ID
	@GetMapping("/{feedbackId}")
	public ResponseEntity<Feedback> getFeedbackById(@PathVariable("feedbackId") String feedbackId) {
		Feedback feedback = feedbackService.getByUserId(feedbackId);
		return new ResponseEntity<>(feedback, HttpStatus.OK);
	}
}
