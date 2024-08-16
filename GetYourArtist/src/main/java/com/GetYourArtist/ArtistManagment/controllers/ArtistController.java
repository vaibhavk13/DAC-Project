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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.GetYourArtist.ArtistManagment.dtos.ArtistDTO;
import com.GetYourArtist.ArtistManagment.services.ArtistService;
import com.GetYourArtist.ArtistManagment.services.impl.ImageService;

@RestController
@RequestMapping("/artists")
public class ArtistController {

	@Autowired
	private ArtistService artistService;

	@Autowired
	private ImageService imageService;

	// Create artist
	@PostMapping
	public ResponseEntity<ArtistDTO> createArtist(@RequestBody ArtistDTO artistDto) {
		ArtistDTO createdArtist = artistService.createArtist(artistDto);
		return new ResponseEntity<>(createdArtist, HttpStatus.CREATED);
	}

	// Update artist
	@PutMapping("/{artistId}")
	public ResponseEntity<ArtistDTO> updateArtist(@PathVariable("artistId") String artistId,
			@RequestBody ArtistDTO artistDto) {
		ArtistDTO updatedArtist = artistService.updateArtist(artistDto, artistId);
		return new ResponseEntity<>(updatedArtist, HttpStatus.OK);
	}

	// Delete artist
	@DeleteMapping("/{artistId}")
	public ResponseEntity<String> deleteArtist(@PathVariable String artistId) {
		artistService.deleteArtist(artistId);
		return new ResponseEntity<>("Artist Deleted Successfully", HttpStatus.OK);
	}

	// Get all artists
	@GetMapping
	public ResponseEntity<List<ArtistDTO>> getAllArtists() {
		List<ArtistDTO> artists = artistService.getAllArtists();
		return new ResponseEntity<>(artists, HttpStatus.OK);
	}

	// Get artist by ID
	@GetMapping("/{artistId}")
	public ResponseEntity<ArtistDTO> getArtistById(@PathVariable String artistId) {
		ArtistDTO artist = artistService.getArtistById(artistId);
		return new ResponseEntity<>(artist, HttpStatus.OK);
	}

	// Get artist by email
	@GetMapping("/email/{email}")
	public ResponseEntity<ArtistDTO> getArtistByEmail(@PathVariable String email) {
		ArtistDTO artist = artistService.getArtistByEmail(email);
		return new ResponseEntity<>(artist, HttpStatus.OK);
	}

	// Search artists by keyword
	@GetMapping("/search/{keywords}")
	public ResponseEntity<List<ArtistDTO>> searchArtists(@PathVariable String keywords) {
		List<ArtistDTO> artists = artistService.searchArtists(keywords);
		return new ResponseEntity<>(artists, HttpStatus.OK);
	}

	@PostMapping("/{artistId}/uploadImages")
	public ResponseEntity<List<String>> uploadImages(@PathVariable String artistId,
			@RequestPart List<MultipartFile> files) {
		List<String> imageUrls = imageService.uploadArtistImages(files);
		// Update the artist's profileImages with the new URLs
		ArtistDTO artistDTO = artistService.getArtistById(artistId);
		artistDTO.setPhotos(imageUrls);
		artistService.updateArtist(artistDTO, artistId);
		return new ResponseEntity<>(imageUrls, HttpStatus.OK);
	}

	@PostMapping("/{artistId}/uploadImage")
	public ResponseEntity<String> uploadImages(@PathVariable String artistId, @RequestPart MultipartFile files) {
		String imageUrls = imageService.uploadArtistProfileImage(files);

		// Update the artist's profileImages with the new URLs

		ArtistDTO artistDTO = artistService.getArtistById(artistId);
		artistDTO.setProfilePhoto(imageUrls);
		artistService.updateArtist(artistDTO, artistId);
		return new ResponseEntity<>(imageUrls, HttpStatus.OK);
	}

}
