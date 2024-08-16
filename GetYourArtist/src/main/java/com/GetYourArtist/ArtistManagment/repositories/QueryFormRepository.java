package com.GetYourArtist.ArtistManagment.repositories;

import com.GetYourArtist.ArtistManagment.entities.QueryForm;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueryFormRepository extends MongoRepository<QueryForm, String> {

}
