package com.GetYourArtist.ArtistManagment.services.impl;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GetYourArtist.ArtistManagment.dtos.BlogDTO;
import com.GetYourArtist.ArtistManagment.entities.Blog;
import com.GetYourArtist.ArtistManagment.repositories.BlogRepository;
import com.GetYourArtist.ArtistManagment.services.BlogService;

@Service
public class BlogImpl implements BlogService {

	@Autowired
	private BlogRepository blogRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public BlogDTO createBlog(BlogDTO blogDTO) {
	    // Generate unique id in string format
	    String blogId = UUID.randomUUID().toString();
	    blogDTO.setBlogId(blogId);

	    // Convert DTO to Entity
	    Blog blog = dtoToEntity(blogDTO);
	    
	    // Save the Blog entity
	    Blog savedBlog = blogRepository.save(blog);

	    // Convert Entity to DTO
	    return entityToDto(savedBlog);
	}


	@Override
	public BlogDTO updateBlog(BlogDTO blogDTO, String blogId) {
		Blog existingBlog = blogRepository.findById(blogId)
				.orElseThrow(() -> new RuntimeException("Blog Not Found with ID: " + blogId));
		existingBlog.setTitle(blogDTO.getTitle());
		existingBlog.setDescription(blogDTO.getDescription());
		existingBlog.setImages(blogDTO.getImages());
		existingBlog.setCreatedAt(blogDTO.getCreatedAt());
		existingBlog.setUpdatedAt(blogDTO.getUpdatedAt());
		Blog updatedBlog = blogRepository.save(existingBlog);
		return entityToDto(updatedBlog);
	}

	@Override
	public void deleteBlog(String blogId) {
		Blog blog = blogRepository.findById(blogId)
				.orElseThrow(() -> new RuntimeException("Blog Not Found with ID: " + blogId));
		blogRepository.delete(blog);
	}

	@Override
	public BlogDTO getBlogById(String blogId) {
		Blog blog = blogRepository.findById(blogId)
				.orElseThrow(() -> new RuntimeException("Blog not found with ID: " + blogId));
		return entityToDto(blog);
	}

	@Override
	public List<BlogDTO> getAllBlogs() {
		List<Blog> blogs = blogRepository.findAll();
		return blogs.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public List<BlogDTO> getBlogsByAuthor(String author) {
		List<Blog> blogs = blogRepository.findByAuthorName(author);
		return blogs.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	private Blog dtoToEntity(BlogDTO blogDTO) {
		return mapper.map(blogDTO, Blog.class);
	}

	private BlogDTO entityToDto(Blog blog) {
		return mapper.map(blog, BlogDTO.class);
	}

}
