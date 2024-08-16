package com.GetYourArtist.ArtistManagment.dtos;

import java.time.LocalDateTime;
import java.util.List;

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
public class BlogDTO {

	private String blogId; // Unique identifier for the blog

	private String authorName; // Author ID (reference to Artist entity)

	private String title; // Title of the blog

	private String description; // Description of the blog

	private String keywords; // Keywords associated with the blog

	private List<String> images; // List of image URLs or file paths

	private LocalDateTime createdAt; // Creation timestamp

	private LocalDateTime updatedAt; // Last updated timestamp

	private String refrenceLinks; // Reference links timestamp
}
