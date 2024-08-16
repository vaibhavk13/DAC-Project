package com.GetYourArtist.ArtistManagment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.GetYourArtist.ArtistManagment.dtos.BlogDTO;
import com.GetYourArtist.ArtistManagment.services.BlogService;
import com.GetYourArtist.ArtistManagment.services.impl.ImageService;

@RestController
@RequestMapping("/blogs")
public class BlogController {

	@Autowired
	private BlogService blogService;

	@Autowired
	private ImageService imageService;

	@PostMapping
	public ResponseEntity<BlogDTO> createBlog(@RequestBody BlogDTO blogDTO) {
		BlogDTO createdBlog = blogService.createBlog(blogDTO);
		return new ResponseEntity<>(createdBlog, HttpStatus.CREATED);
	}

	@PutMapping("/{blogId}")
	public ResponseEntity<BlogDTO> updateBlog(@PathVariable("blogId") String blogId, @RequestBody BlogDTO blogDTO) {
		BlogDTO updatedBlog = blogService.updateBlog(blogDTO, blogId);
		return new ResponseEntity<>(updatedBlog, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteBlog(@PathVariable("id") String id) {
		blogService.deleteBlog(id);
		return new ResponseEntity<>("Blog deleted successfully", HttpStatus.OK);
	}

	@GetMapping("/{blogId}")
	public ResponseEntity<BlogDTO> getBlogById(@PathVariable("blogId") String blogId) {
		BlogDTO blog = blogService.getBlogById(blogId);
		return new ResponseEntity<>(blog, HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<List<BlogDTO>> getAllBlogs() {
		List<BlogDTO> blogs = blogService.getAllBlogs();
		return new ResponseEntity<>(blogs, HttpStatus.OK);
	}

	@GetMapping("/author/{authorName}")
	public ResponseEntity<List<BlogDTO>> getBlogsByAuthor(@PathVariable("authorName") String author) {
		List<BlogDTO> blogs = blogService.getBlogsByAuthor(author);
		return new ResponseEntity<>(blogs, HttpStatus.OK);
	}

	@PostMapping("/{blogId}/uploadImages")
	public ResponseEntity<List<String>> uploadImages(@PathVariable String blogId,
			@RequestPart List<MultipartFile> files) {
		List<String> imageUrls = imageService.uploadBlogImages(files);
		BlogDTO blogDTO = blogService.getBlogById(blogId);
		blogDTO.setImages(imageUrls);
		blogService.updateBlog(blogDTO, blogId);
		return new ResponseEntity<>(imageUrls, HttpStatus.OK);
	}
}
