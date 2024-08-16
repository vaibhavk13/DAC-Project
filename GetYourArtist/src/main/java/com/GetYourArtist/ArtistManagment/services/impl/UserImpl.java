package com.GetYourArtist.ArtistManagment.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.GetYourArtist.ArtistManagment.dtos.UserDTO;

import com.GetYourArtist.ArtistManagment.entities.User;
import com.GetYourArtist.ArtistManagment.repositories.UserRepository;
import com.GetYourArtist.ArtistManagment.services.UserService;

@Service
public class UserImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UserDTO createUser(UserDTO userDTO) {
		// Generate unique ID in string format
		String userId = UUID.randomUUID().toString();
		userDTO.setUserId(userId);

		// Convert DTO to entity
		User user = dtoToEntity(userDTO);
		User savedUser = userRepository.save(user);

		// Convert entity to DTO
		return entityToDto(savedUser);
	}

	@Override
	public UserDTO updateUser(UserDTO userDTO, String userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User Not Found with given ID"));

		// Update user details
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		user.setGender(userDTO.getGender());
		user.setEmail(userDTO.getEmail());
		user.setPassword(userDTO.getPassword());
		user.setAbout(userDTO.getAbout());
		user.setIdProof(userDTO.getIdProof());
		user.setProfileImage(userDTO.getProfileImage());

		// Save updated user
		User updatedUser = userRepository.save(user);

		// Convert entity to DTO
		return entityToDto(updatedUser);
	}

	@Override
	public void deleteUser(String userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User Not Found with given ID"));

		userRepository.deleteById(userId);
	}

	@Override
	public List<UserDTO> getAllUsers() {
		List<User> users = userRepository.findAll();
		return users.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public UserDTO getUserById(String userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User Not Found with given ID"));

		return entityToDto(user);
	}

	@Override
	public Optional<UserDTO> getUserByEmail(String email) {
		return userRepository.findByEmail(email).map(this::entityToDto);
	}

	private UserDTO entityToDto(User user) {
		return mapper.map(user, UserDTO.class);
	}

	private User dtoToEntity(UserDTO userDTO) {
		return mapper.map(userDTO, User.class);
	}
}
