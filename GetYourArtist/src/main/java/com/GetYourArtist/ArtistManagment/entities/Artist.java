package com.GetYourArtist.ArtistManagment.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "artists") // Define MongoDB collection
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Artist {

	@Id
	private String artistId; // MongoDB automatically uses this field as the primary key

	@Field(name = "first_name") // Map to MongoDB field name
	private String firstName;

	@Field(name = "last_name")
	private String lastName;

	@Field(name = "gender")
	private String gender;

	@Field(name = "genre")
	private String genre;

	@Field(name = "email")
	private String email;

	@Field(name = "website")
	private String website;

	@Field(name = "contact_number")
	private String contactNumber;

	@Field(name = "address")
	private String address;

	@Field(name = "password")
	private String password;

	@Field(name = "id_Proof")
	private Integer idProof;

	@Field(name = "photos")
	private List<String> photos; // images should be uploaded in the database

	@Field(name = "profilePhoto")
	private String profilePhoto;

	@Field(name = "about_work")
	private String aboutWork;

	@Field(name = "facebook")
	private String facebook;

	@Field(name = "instagram")
	private String instagram;

	@Field(name = "twitter")
	private String twitter;

	@Field(name = "snapchat")
	private String snapchat;

    @DBRef	
    @Field(name = "bookings") // Field for storing related bookings
    private Set<ArtistBooking> bookings = new HashSet<>(); // Initialize as an empty set

}
