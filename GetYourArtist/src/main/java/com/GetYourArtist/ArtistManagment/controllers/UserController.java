package com.GetYourArtist.ArtistManagment.controllers;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.GetYourArtist.ArtistManagment.dtos.ArtistDTO;
import com.GetYourArtist.ArtistManagment.dtos.UserDTO;
import com.GetYourArtist.ArtistManagment.services.UserService;
import com.GetYourArtist.ArtistManagment.services.impl.ImageService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private ImageService imageService;

	// Create user
	@PostMapping
	public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
		UserDTO createdUser = userService.createUser(userDTO);
		return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
	}

	// Update user
	@PutMapping("/{userId}")
	public ResponseEntity<UserDTO> updateUser(@PathVariable("userId") String userId, @RequestBody UserDTO userDTO) {
		UserDTO updatedUser = userService.updateUser(userDTO, userId);
		return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	}

	// Delete user
	@DeleteMapping("/{userId}")
	public ResponseEntity<Void> deleteUser(@PathVariable("userId") String userId) {
		userService.deleteUser(userId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT); // No content to return
	}

	// Get all users
	@GetMapping
	public ResponseEntity<List<UserDTO>> getAllUsers() {
		List<UserDTO> users = userService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	// Get user by ID
	@GetMapping("/{userId}")
	public ResponseEntity<UserDTO> getUserById(@PathVariable("userId") String userId) {

		UserDTO user = userService.getUserById(userId);
		return new ResponseEntity<>(user, HttpStatus.OK);

	}

	@PostMapping("/{userId}/uploadImage")
	public ResponseEntity<String> uploadImages(@PathVariable String userId, @RequestPart MultipartFile files) {
		String imageUrls = imageService.uploadUserImage(files);

		// Update the user's profileImages with the new URLs

		UserDTO userDTO = userService.getUserById(userId);
		userDTO.setProfileImage(imageUrls);
		userService.updateUser(userDTO, userId);
		return new ResponseEntity<>(imageUrls, HttpStatus.OK);
	}

}
