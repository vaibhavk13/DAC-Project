package com.GetYourArtist.ArtistManagment.services;

import java.time.LocalDateTime;
import java.util.List;

import com.GetYourArtist.ArtistManagment.dtos.ArtistBookingDTO;

public interface ArtistBookingService {

	// Create a new booking
	ArtistBookingDTO createBooking(ArtistBookingDTO bookingDTO);

	// Update an existing booking
	ArtistBookingDTO updateBooking(ArtistBookingDTO bookingDTO, String bookingId);

	// Delete a booking by ID
	void deleteBooking(String bookingId);

	// Get a booking by ID
	ArtistBookingDTO getBookingById(String bookingId);

	// Get all bookings
	List<ArtistBookingDTO> getAllBookings();

	// Get bookings by artist Name
	List<ArtistBookingDTO> getBookingsByArtistName(String firstName);

	// Get bookings by user ID
	List<ArtistBookingDTO> getBookingsByUserName(String firstName);

	// Get bookings by status
	List<ArtistBookingDTO> getBookingsByStatus(String status);

	// Get bookings by artist ID and status
	List<ArtistBookingDTO> getBookingsByArtistNameAndStatus(String firstName, String status);

	// Get bookings by user ID and status
	List<ArtistBookingDTO> getBookingsByUserNameAndStatus(String firstName, String status);

	// Get a booking by artist Name and event date
	ArtistBookingDTO getBookingByArtistNameAndEventDate(String firstName, LocalDateTime eventDate);
}
