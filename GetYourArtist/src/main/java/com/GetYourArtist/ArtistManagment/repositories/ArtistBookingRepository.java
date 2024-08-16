package com.GetYourArtist.ArtistManagment.repositories;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.GetYourArtist.ArtistManagment.entities.ArtistBooking;

@Repository
public interface ArtistBookingRepository extends MongoRepository<ArtistBooking, String> {

	// Find bookings by artist name
	List<ArtistBooking> findByArtistFirstName(String firstName);

	// Find bookings by user name
	List<ArtistBooking> findByUserFirstName(String firstName);

	// Find bookings by status
	List<ArtistBooking> findByStatus(String status);

	// Find bookings by artist name and status
	List<ArtistBooking> findByArtistFirstNameAndStatus(String firstName, String status);
	
	// Find bookings by user name and status
	List<ArtistBooking> findByUserFirstNameAndStatus(String firstName, String status);

	// Find a booking by artist name and event date
	Optional<ArtistBooking> findByArtistFirstNameAndEventDate(String firstName, LocalDateTime eventDate);
}
