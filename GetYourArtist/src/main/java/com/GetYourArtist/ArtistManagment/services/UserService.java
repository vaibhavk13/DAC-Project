package com.GetYourArtist.ArtistManagment.services;

import java.util.List;
import java.util.Optional;

import com.GetYourArtist.ArtistManagment.dtos.UserDTO;

public interface UserService {

	// Create a new user
	UserDTO createUser(UserDTO userDTO);

	// Update an existing user by ID
	UserDTO updateUser(UserDTO userDTO, String userId);

	// Delete a user by ID
	void deleteUser(String userId);

	// Retrieve all users
	List<UserDTO> getAllUsers();

	// Retrieve a user by ID
	UserDTO getUserById(String userId);

	// Retrieve a user by email
	Optional<UserDTO> getUserByEmail(String email);
}
