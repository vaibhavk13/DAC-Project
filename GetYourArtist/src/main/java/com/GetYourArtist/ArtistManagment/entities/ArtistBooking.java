package com.GetYourArtist.ArtistManagment.entities;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.DBRef;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArtistBooking {

	@Id
	@Field(name = "Booking_Id")
	private String id;

	@DBRef
	@Field(name = "Artist_Id")
	private Artist artist;

	@DBRef
	@Field(name = "User_Id")
	private User user;

	@Field(name = "event_theme")
	private String theme;

	@Field(name = "event_attire")
	private String attire;

	@Field(name = "category")
	private String category;

	@Field(name = "equipment_details")
	private String equipmentdetails;

	@Field(name = "Booking_Created_On")
	private LocalDateTime createdDate;

	@Field(name = "name_of_event")
	private String nameOfEvent;

	@Field(name = "Event_Date")
	private LocalDateTime eventDate;

	@Field(name = "venue_address")
	private String venueAddress;

	@Field(name = "Status_Of_Booking")
	private String status;

}
