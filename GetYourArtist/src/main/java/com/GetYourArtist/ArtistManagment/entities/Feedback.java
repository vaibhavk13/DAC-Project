package com.GetYourArtist.ArtistManagment.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "feedback")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Feedback {

	@Id
	@Field(name = "Feedback_Id")
	private String feedbackId;

//	@DBRef
//	@Field(name = "User_Id")
//	private User user;

	@Field("Experience")
	private String overallExperience;

	@Field("Type")
	private String feedbackType;

	@Field("Descrption")
	private String feedbackDescription;

	@Field("Email-Id")
	private String email;

}