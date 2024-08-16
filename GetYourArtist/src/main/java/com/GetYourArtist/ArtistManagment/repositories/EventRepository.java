package com.GetYourArtist.ArtistManagment.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.GetYourArtist.ArtistManagment.entities.Event;

@Repository
public interface EventRepository extends MongoRepository<Event, String> {

	// Find events by status
	List<Event> findByStatus(String status);

	// Find events by a range of event dates
	List<Event> findByEventDateBetween(LocalDateTime startDate, LocalDateTime endDate);

	// Find events by details containing a specific keyword
	List<Event> findByDetailsContainingIgnoreCase(String keyword);
}
