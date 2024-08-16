package com.GetYourArtist.ArtistManagment.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.GetYourArtist.ArtistManagment.entities.Feedback;

@Repository
public interface FeedbackRepository extends MongoRepository<Feedback, String> {

}
