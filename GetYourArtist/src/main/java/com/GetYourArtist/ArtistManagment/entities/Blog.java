package com.GetYourArtist.ArtistManagment.entities;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Blogs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Blog {

	@Id
	@Field(name = "blog_id")
	private String blogId; // Primary Key as String in MongoDB

	@Field(name = "author_Name")
	private String authorName; 
	
	@Field(name = "title")
	private String title;

	@Field(name = "description")
	private String description;

	@Field(name = "keywords")
	private String keywords;

	@Field(name = "images")
	private List<String> images; // Assuming images are stored as URLs or file paths

	@Field(name = "created_at")
	private LocalDateTime createdAt;

	@Field(name = "updated_at")
	private LocalDateTime updatedAt;

	@Field(name = "refrence_links")
	private String refrencelinks;

}
