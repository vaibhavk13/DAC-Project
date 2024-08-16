package com.GetYourArtist.ArtistManagment.services.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GetYourArtist.ArtistManagment.dtos.ArtistBookingDTO;
import com.GetYourArtist.ArtistManagment.entities.Artist;
import com.GetYourArtist.ArtistManagment.entities.ArtistBooking;
import com.GetYourArtist.ArtistManagment.entities.User;
import com.GetYourArtist.ArtistManagment.repositories.ArtistBookingRepository;
import com.GetYourArtist.ArtistManagment.repositories.ArtistRepository;
import com.GetYourArtist.ArtistManagment.repositories.UserRepository;
import com.GetYourArtist.ArtistManagment.services.ArtistBookingService;

@Service
public class ArtistBookingImpl implements ArtistBookingService {

	@Autowired
	private ArtistRepository artistRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ArtistBookingRepository bookingRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ArtistBookingDTO createBooking(ArtistBookingDTO bookingDTO) {

		// Generate unique ID for the booking
		String id = UUID.randomUUID().toString();
		bookingDTO.setId(id);

		// Convert DTO to Entity
		ArtistBooking booking = dtoToEntity(bookingDTO);

		// Save the booking entity
		ArtistBooking savedBooking = bookingRepo.save(booking);

		// Update the artist's bookings list
		Artist artist = artistRepository.findById(bookingDTO.getArtistId())
				.orElseThrow(() -> new RuntimeException("Artist Not Found with given ID"));

		// Add the new booking to the artist's bookings
		artist.getBookings().add(savedBooking);
		artistRepository.save(artist);

		// Update the user's bookings list
		User user = userRepository.findById(bookingDTO.getUserId())
				.orElseThrow(() -> new RuntimeException("User Not Found with given ID"));

		// Add the new booking to the user's bookings
		user.getBookings().add(savedBooking);
		userRepository.save(user);

		// Convert the saved booking entity back to DTO
		return entityToDto(savedBooking);
	}

	@Override
	public ArtistBookingDTO updateBooking(ArtistBookingDTO bookingDTO, String bookingId) {

		ArtistBooking existingBooking = bookingRepo.findById(bookingId)
				.orElseThrow(() -> new RuntimeException("Booking Not Found with given ID"));

		// Update booking fields
		existingBooking.setArtist(dtoToEntity(bookingDTO).getArtist());
		existingBooking.setUser(dtoToEntity(bookingDTO).getUser());
		existingBooking.setTheme(bookingDTO.getTheme()); // Update theme
		existingBooking.setAttire(bookingDTO.getAttire()); // Update attire
		existingBooking.setCategory(bookingDTO.getCategory());
		existingBooking.setEquipmentdetails(bookingDTO.getEquipmentdetails()); // Update equipmentdetails
		existingBooking.setCreatedDate(bookingDTO.getCreatedDate());
		existingBooking.setNameOfEvent(bookingDTO.getNameOfEvent());
		existingBooking.setEventDate(bookingDTO.getEventDate());
		existingBooking.setVenueAddress(bookingDTO.getVenueAddress());
		existingBooking.setStatus(bookingDTO.getStatus());
		// Save updated booking
		ArtistBooking updatedBooking = bookingRepo.save(existingBooking);

		// Entity to DTO
		return entityToDto(updatedBooking);
	}

	@Override
	public void deleteBooking(String bookingId) {
		ArtistBooking booking = bookingRepo.findById(bookingId)
				.orElseThrow(() -> new RuntimeException("Artist Not Found with given ID"));

		bookingRepo.deleteById(bookingId);
	}

	@Override
	public ArtistBookingDTO getBookingById(String bookingId) {

		ArtistBooking booking = bookingRepo.findById(bookingId)
				.orElseThrow(() -> new RuntimeException("No Booking found with Given ID"));

		return entityToDto(booking);
	}

	@Override
	public List<ArtistBookingDTO> getAllBookings() {

		List<ArtistBooking> bookings = bookingRepo.findAll();
		return bookings.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public List<ArtistBookingDTO> getBookingsByArtistName(String firstName) {
		// Fetch artists by first name
		List<Artist> artists = artistRepository.findByFirstNameContainingIgnoreCase(firstName);

		// Extract bookings from artists and convert to DTOs
		return artists.stream().flatMap(artist -> artist.getBookings().stream())
				.map(booking -> mapper.map(booking, ArtistBookingDTO.class)).collect(Collectors.toList());
	}

	@Override
	public List<ArtistBookingDTO> getBookingsByUserName(String firstName) {

		List<ArtistBooking> bookings = bookingRepo.findByUserFirstName(firstName);
		return bookings.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public List<ArtistBookingDTO> getBookingsByStatus(String status) {

		List<ArtistBooking> bookings = bookingRepo.findByStatus(status);
		return bookings.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public List<ArtistBookingDTO> getBookingsByArtistNameAndStatus(String firstName, String status) {

		List<ArtistBooking> bookings = bookingRepo.findByArtistFirstNameAndStatus(firstName, status);
		return bookings.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public ArtistBookingDTO getBookingByArtistNameAndEventDate(String firstName, LocalDateTime eventDate) {

		ArtistBooking booking = bookingRepo.findByArtistFirstNameAndEventDate(firstName, eventDate)
				.orElseThrow(() -> new RuntimeException("No Booking found with given Artist firstName and Event Date"));

		return entityToDto(booking);
	}

	@Override
	public List<ArtistBookingDTO> getBookingsByUserNameAndStatus(String firstName, String status) {

		List<ArtistBooking> bookings = bookingRepo.findByUserFirstNameAndStatus(firstName, status);
		return bookings.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	private ArtistBooking dtoToEntity(ArtistBookingDTO bookingDTO) {

		return mapper.map(bookingDTO, ArtistBooking.class);
	}

	private ArtistBookingDTO entityToDto(ArtistBooking booking) {

		return mapper.map(booking, ArtistBookingDTO.class);
	}

}
