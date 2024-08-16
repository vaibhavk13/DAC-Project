package com.GetYourArtist.ArtistManagment.services;

import java.util.List;

import com.GetYourArtist.ArtistManagment.dtos.QueryFormDTO;

public interface QueryFormService {

	// Create a new query form
	QueryFormDTO createQueryForm(QueryFormDTO queryFormDTO);

	// Update an existing query form by ID
	QueryFormDTO updateQueryForm(QueryFormDTO queryFormDTO, String queryFormId);

	// Delete a query form by ID
	void deleteQueryForm(String queryFormId);

	// Retrieve all query forms
	List<QueryFormDTO> getAllQueryForms();

	// Retrieve a single query form by ID
	QueryFormDTO getQueryFormById(String queryFormId);

}
