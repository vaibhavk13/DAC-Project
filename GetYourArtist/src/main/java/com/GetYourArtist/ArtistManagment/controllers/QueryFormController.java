package com.GetYourArtist.ArtistManagment.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.GetYourArtist.ArtistManagment.dtos.QueryFormDTO;
import com.GetYourArtist.ArtistManagment.services.QueryFormService;

@RestController
@RequestMapping("/api/queryForms")
public class QueryFormController {

	@Autowired
	private QueryFormService queryFormService;

	// Create a new QueryForm
	@PostMapping
	public ResponseEntity<QueryFormDTO> createQueryForm(@RequestBody QueryFormDTO queryFormDTO) {
		QueryFormDTO createdQueryForm = queryFormService.createQueryForm(queryFormDTO);
		return new ResponseEntity<>(createdQueryForm, HttpStatus.CREATED);
	}

	// Update an existing QueryForm by ID
	@PutMapping("/{queryFormId}")
	public ResponseEntity<QueryFormDTO> updateQueryForm(@PathVariable String queryFormId,
			@RequestBody QueryFormDTO queryFormDTO) {
		QueryFormDTO updatedQueryForm = queryFormService.updateQueryForm(queryFormDTO, queryFormId);
		return new ResponseEntity<>(updatedQueryForm, HttpStatus.OK);
	}

	// Delete a QueryForm by ID
	@DeleteMapping("/{queryFormId}")
	public ResponseEntity<Void> deleteQueryForm(@PathVariable String queryFormId) {
		queryFormService.deleteQueryForm(queryFormId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// Retrieve all QueryForms
	@GetMapping
	public ResponseEntity<List<QueryFormDTO>> getAllQueryForms() {
		List<QueryFormDTO> queryForms = queryFormService.getAllQueryForms();
		return new ResponseEntity<>(queryForms, HttpStatus.OK);
	}

	// Retrieve a single QueryForm by ID
	@GetMapping("/{queryFormId}")
	public ResponseEntity<QueryFormDTO> getQueryFormById(@PathVariable String queryFormId) {
		QueryFormDTO queryFormDTO = queryFormService.getQueryFormById(queryFormId);
		return new ResponseEntity<>(queryFormDTO, HttpStatus.OK);
	}
}
