package com.GetYourArtist.ArtistManagment.services;

import java.time.LocalDateTime;
import java.util.List;

import com.GetYourArtist.ArtistManagment.dtos.EventDTO;

public interface EventService {

	// Create a new event
	EventDTO createEvent(EventDTO eventDTO);

	// Update an existing event
	EventDTO updateEvent(EventDTO eventDTO, String eventId);

	// Delete an event	
	void deleteEvent(String eventId);

	// Get an event by ID
	EventDTO getEventById(String eventId);

	// Get all events
	List<EventDTO> getAllEvents();

	// Get events by status
	List<EventDTO> getEventsByStatus(String status);

	// Get events by a range of event dates
	List<EventDTO> getEventsByDateRange(LocalDateTime startDate, LocalDateTime endDate);

	// Search events by details containing a keyword
	List<EventDTO> searchEventsByDetails(String keyword);
}
