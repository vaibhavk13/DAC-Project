package com.GetYourArtist.ArtistManagment.entities;

import java.util.HashSet;
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

@Document(collection = "Users") // Specifies the collection name in MongoDB
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

	@Id
	private String userId; // MongoDB will use this as the unique identifier

	@Field("First_Name")
	private String firstName;

	@Field("Last_Name")
	private String lastName;

	@Field("Gender")
	private String gender;

	@Field("Email")
	private String email;

	@Field("Password")
	private String password;

	@Field(name = "id_Proof")
	private Integer idProof;

	@Field("profile_image")
	private String profileImage;

	@Field("organization")
	private String organization;

	@Field("Designation")
	private String Designation;

	@Field("about")
	private String about;

	 @DBRef
	    @Field("bookings")
	    private Set<ArtistBooking> bookings = new HashSet<>(); // Initialize as an empty set


}
