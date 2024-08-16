package com.GetYourArtist.ArtistManagment.dtos;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArtistBookingDTO {

	private String id; // Booking ID

	private String artistId; // ID of the artist

	private String userId; // ID of the user

	private String theme; // Event theme

	private String attire; // Event attire

	private String category; // Category of the event

	private String equipmentdetails; // Details of equipment

	private LocalDateTime createdDate; // Date and time when the booking was created

	private String nameOfEvent; // Name of the event

	private LocalDateTime eventDate; // Date and time of the event

	private String venueAddress; // Address of the venue

	private String status; // Status of the booking
}
