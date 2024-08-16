package com.GetYourArtist.ArtistManagment.services;

import java.util.List;

import com.GetYourArtist.ArtistManagment.dtos.BlogDTO;

public interface BlogService {

	// Create a new blog post
	BlogDTO createBlog(BlogDTO blogDTO);

	// Update an existing blog post
	BlogDTO updateBlog(BlogDTO blogDTO, String blogId);

	// Delete a blog post
	void deleteBlog(String blogId);

	// Get a blog post by ID
	BlogDTO getBlogById(String blogId);

	// Get all blog posts
	List<BlogDTO> getAllBlogs();

	// Get blogs by author ID
	List<BlogDTO> getBlogsByAuthor(String author);
}
