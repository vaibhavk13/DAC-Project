package com.GetYourArtist.ArtistManagment.dtos;

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
public class QueryFormDTO {

	private String id; // Unique identifier for the query form

	private String firstName; // First name from the form

	private String lastName; // Last name from the form

	private String email; // Email from the form

	private String selectQueryType; // Type of query selected

	private String message; // Message from the form
}
