package com.GetYourArtist.ArtistManagment.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "queries") // Specifies the collection name in MongoDB
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QueryForm {

	@Id
	private String id; // MongoDB will use this as the unique identifier, auto-generated

	@Field(name = "first_name")
	private String firstName;

	@Field(name = "last_name")
	private String lastName;

	@Field(name = "email")
	private String email;

	@Field(name = "select_query_type")
	private String selectQueryType;

	@Field(name = "message")
	private String message;
}
