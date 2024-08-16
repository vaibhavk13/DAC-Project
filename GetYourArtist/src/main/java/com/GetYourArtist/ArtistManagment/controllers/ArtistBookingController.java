package com.GetYourArtist.ArtistManagment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.GetYourArtist.ArtistManagment.dtos.ArtistBookingDTO;
import com.GetYourArtist.ArtistManagment.services.ArtistBookingService;

@RestController
@RequestMapping("/api/bookings")
public class ArtistBookingController {

	@Autowired
	private ArtistBookingService bookingService;

	// Create a new booking
	@PostMapping
	public ResponseEntity<ArtistBookingDTO> createBooking(@RequestBody ArtistBookingDTO bookingDTO) {
		ArtistBookingDTO createdBooking = bookingService.createBooking(bookingDTO);
		return new ResponseEntity<>(createdBooking, HttpStatus.CREATED);
	}

	// Update an existing booking
	@PutMapping("/{bookingId}")
	public ResponseEntity<ArtistBookingDTO> updateBooking(@PathVariable String bookingId,
			@RequestBody ArtistBookingDTO bookingDTO) {
		ArtistBookingDTO updatedBooking = bookingService.updateBooking(bookingDTO, bookingId);
		return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
	}

	// Delete a booking by ID
	@DeleteMapping("/{bookingId}")
	public ResponseEntity<Void> deleteBooking(@PathVariable String bookingId) {
		bookingService.deleteBooking(bookingId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// Get a booking by ID
	@GetMapping("/{bookingId}")
	public ResponseEntity<ArtistBookingDTO> getBookingById(@PathVariable String bookingId) {
		ArtistBookingDTO bookingDTO = bookingService.getBookingById(bookingId);
		return new ResponseEntity<>(bookingDTO, HttpStatus.OK);
	}

	// Get all bookings
	@GetMapping
	public ResponseEntity<List<ArtistBookingDTO>> getAllBookings() {
		List<ArtistBookingDTO> bookings = bookingService.getAllBookings();
		return new ResponseEntity<>(bookings, HttpStatus.OK);
	}

	@GetMapping("/artist/{firstName}")
	public ResponseEntity<List<ArtistBookingDTO>> getBookingsByArtistName(@PathVariable String firstName) {
		List<ArtistBookingDTO> bookings = bookingService.getBookingsByArtistName(firstName);
		return new ResponseEntity<>(bookings, HttpStatus.OK);
	}

	// Get bookings by status
	@GetMapping("/status/{status}")
	public ResponseEntity<List<ArtistBookingDTO>> getBookingsByStatus(@PathVariable String status) {
		List<ArtistBookingDTO> bookings = bookingService.getBookingsByStatus(status);
		return new ResponseEntity<>(bookings, HttpStatus.OK);
	}

}
