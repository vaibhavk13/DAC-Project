package com.GetYourArtist.ArtistManagment.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.GetYourArtist.ArtistManagment.entities.Blog;

@Repository
public interface BlogRepository extends MongoRepository<Blog, String> {

	// Find blogs by author ID
	List<Blog> findByAuthorName(String author);
}
