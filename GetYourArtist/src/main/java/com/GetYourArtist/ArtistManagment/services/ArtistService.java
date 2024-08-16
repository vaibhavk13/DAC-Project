package com.GetYourArtist.ArtistManagment.services;

import java.util.List;

import com.GetYourArtist.ArtistManagment.dtos.ArtistDTO;

public interface ArtistService {

	// Create a new artist
	ArtistDTO createArtist(ArtistDTO artistDTO);

	// Update an existing artist by ID
	ArtistDTO updateArtist(ArtistDTO artistDTO, String artistId);

	// Delete an artist by ID
	void deleteArtist(String artistId);

	// Retrieve all artists
	List<ArtistDTO> getAllArtists();

	// Retrieve a single artist by ID
	ArtistDTO getArtistById(String artistId);

	// Retrieve a single artist by email
	ArtistDTO getArtistByEmail(String email);

	// Search artists by a keyword in their first name
	List<ArtistDTO> searchArtists(String keyword);



}
