package com.GetYourArtist.ArtistManagment.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.GetYourArtist.ArtistManagment.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

	// Custom query method to find a user by email
	Optional<User> findByEmail(String email);
}
