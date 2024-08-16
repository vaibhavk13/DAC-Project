package com.GetYourArtist.ArtistManagment.dtos;

import java.util.List;
import java.util.Set;

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
public class ArtistDTO {

	private String artistId; // MongoDB automatically uses this field as the primary key

	private String firstName;

	private String lastName;

	private String gender;

	private String genre;

	private String email;

	private String website;

	private String contactNumber;

	private String address;

	private String password; // Consider not exposing sensitive fields like passwords

	private Integer idProof;

	private List<String> photos; // URLs or paths to additional photos

	private String profilePhoto; // URL or path to the profile photo

	private String aboutWork;

	private String facebook;

	private String instagram;

	private String twitter;

	private String snapchat;

	private Set<ArtistBookingDTO> bookings; // DTO for related bookings
}
