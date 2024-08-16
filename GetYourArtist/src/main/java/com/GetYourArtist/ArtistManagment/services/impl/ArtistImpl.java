package com.GetYourArtist.ArtistManagment.services.impl;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GetYourArtist.ArtistManagment.dtos.ArtistDTO;
import com.GetYourArtist.ArtistManagment.entities.Artist;
import com.GetYourArtist.ArtistManagment.repositories.ArtistRepository;
import com.GetYourArtist.ArtistManagment.services.ArtistService;

@Service
public class ArtistImpl implements ArtistService {

	@Autowired
	private ArtistRepository artistRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ArtistDTO createArtist(ArtistDTO artistDTO) {

		// Generate unique id in string format
		String artistId = UUID.randomUUID().toString();
		artistDTO.setArtistId(artistId);

		// Convert DTO to Entity
		Artist artist = dtoToEntity(artistDTO);
		Artist savedArtist = artistRepository.save(artist);

		// Convert Entity to DTO
		return entityToDto(savedArtist);
	}

	@Override
	public ArtistDTO updateArtist(ArtistDTO artistDTO, String artistId) {
		Artist artist = artistRepository.findById(artistId)
				.orElseThrow(() -> new RuntimeException("Artist Not Found with given ID"));

		// Update artist details
		artist.setFirstName(artistDTO.getFirstName());
		artist.setLastName(artistDTO.getLastName());
		artist.setGender(artistDTO.getGender());
		artist.setGenre(artistDTO.getGenre());
		artist.setEmail(artistDTO.getEmail());
		artist.setWebsite(artistDTO.getWebsite());
		artist.setContactNumber(artistDTO.getContactNumber());
		artist.setAddress(artistDTO.getAddress());
		artist.setPassword(artistDTO.getPassword());
		artist.setIdProof(artistDTO.getIdProof());
		artist.setPhotos(artistDTO.getPhotos());
		artist.setProfilePhoto(artistDTO.getProfilePhoto());
		artist.setAboutWork(artistDTO.getAboutWork());
		artist.setFacebook(artistDTO.getFacebook());
		artist.setInstagram(artistDTO.getInstagram());
		artist.setTwitter(artistDTO.getTwitter());
		artist.setSnapchat(artistDTO.getSnapchat());
		// Save updated artist
		Artist updatedArtist = artistRepository.save(artist);

		// Convert Entity to DTO
		return entityToDto(updatedArtist);
	}

	@Override
	public void deleteArtist(String artistId) {
		Artist artist = artistRepository.findById(artistId)
				.orElseThrow(() -> new RuntimeException("Artist Not Found with given ID"));

		artistRepository.deleteById(artistId);
	}

	@Override
	public List<ArtistDTO> getAllArtists() {
		List<Artist> artists = artistRepository.findAll();
		return artists.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public ArtistDTO getArtistById(String artistId) {
		Artist artist = artistRepository.findById(artistId)
				.orElseThrow(() -> new RuntimeException("Artist Not Found with given ID"));

		return entityToDto(artist);
	}

	@Override
	public ArtistDTO getArtistByEmail(String email) {
		Artist artist = artistRepository.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Artist Not Found with Given Email"));

		return entityToDto(artist);
	}

	@Override
	public List<ArtistDTO> searchArtists(String keyword) {
		List<Artist> artists = artistRepository.findByGenreContainingIgnoreCase(keyword);
		return artists.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	private ArtistDTO entityToDto(Artist artist) {
		return mapper.map(artist, ArtistDTO.class);
	}

	private Artist dtoToEntity(ArtistDTO artistDTO) {
		return mapper.map(artistDTO, Artist.class);
	}

}
