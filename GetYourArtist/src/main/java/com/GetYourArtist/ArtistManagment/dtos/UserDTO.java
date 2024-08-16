package com.GetYourArtist.ArtistManagment.dtos;

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
public class UserDTO {

	private String userId; // User ID

	private String firstName; // First name of the user

	private String lastName; // Last name of the user

	private String gender; // Gender of the user

	private String email; // Email address of the user

	private String password; // Password of the user

	private Integer idProof; // ID proof (e.g., identification number)

	private String profileImage; // URL or path of the profile image

	private String organization; // Organization the user belongs to

	private String designation; // User's designation or role

	private String about; // Brief description about the user

	private Set<String> bookings; // Set of booking IDs related to the user
}
