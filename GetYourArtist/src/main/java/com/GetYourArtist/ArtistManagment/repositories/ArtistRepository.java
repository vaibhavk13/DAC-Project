package com.GetYourArtist.ArtistManagment.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.GetYourArtist.ArtistManagment.entities.Artist;

@Repository
public interface ArtistRepository extends MongoRepository<Artist, String> {

	// Find an artist by their email address
	Optional<Artist> findByEmail(String email);

	// Find artists whose first name contains the given keyword

	List<Artist> findByGenreContainingIgnoreCase(String keyword);


	// Find artists by their first name
	List<Artist> findByFirstNameContainingIgnoreCase(String firstName);
}
