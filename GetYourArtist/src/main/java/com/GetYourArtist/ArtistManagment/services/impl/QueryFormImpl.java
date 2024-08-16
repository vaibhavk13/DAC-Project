package com.GetYourArtist.ArtistManagment.services.impl;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GetYourArtist.ArtistManagment.dtos.QueryFormDTO;
import com.GetYourArtist.ArtistManagment.entities.QueryForm;
import com.GetYourArtist.ArtistManagment.repositories.QueryFormRepository;
import com.GetYourArtist.ArtistManagment.services.QueryFormService;

@Service
public class QueryFormImpl implements QueryFormService {

	@Autowired
	private QueryFormRepository queryFormRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public QueryFormDTO createQueryForm(QueryFormDTO queryFormDTO) {
		// Generate unique id for the query form
		String queryFormId = UUID.randomUUID().toString();
		queryFormDTO.setId(queryFormId);

		// Convert DTO to Entity
		QueryForm queryForm = dtoToEntity(queryFormDTO);
		QueryForm savedQueryForm = queryFormRepository.save(queryForm);

		// Convert Entity to DTO
		return entityToDto(savedQueryForm);
	}

	@Override
	public QueryFormDTO updateQueryForm(QueryFormDTO queryFormDTO, String queryFormId) {
		QueryForm queryForm = queryFormRepository.findById(queryFormId)
				.orElseThrow(() -> new RuntimeException("QueryForm Not Found with given ID"));

		// Update query form details
		queryForm.setFirstName(queryFormDTO.getFirstName());
		queryForm.setLastName(queryFormDTO.getLastName());
		queryForm.setEmail(queryFormDTO.getEmail());
		queryForm.setSelectQueryType(queryFormDTO.getSelectQueryType());
		queryForm.setMessage(queryFormDTO.getMessage());

		// Save updated query form
		QueryForm updatedQueryForm = queryFormRepository.save(queryForm);

		// Convert Entity to DTO
		return entityToDto(updatedQueryForm);
	}

	@Override
	public void deleteQueryForm(String queryFormId) {
		QueryForm queryForm = queryFormRepository.findById(queryFormId)
				.orElseThrow(() -> new RuntimeException("QueryForm Not Found with given ID"));

		queryFormRepository.deleteById(queryFormId);
	}

	@Override
	public List<QueryFormDTO> getAllQueryForms() {
		List<QueryForm> queryForms = queryFormRepository.findAll();
		return queryForms.stream().map(this::entityToDto).collect(Collectors.toList());
	}

	@Override
	public QueryFormDTO getQueryFormById(String queryFormId) {
		QueryForm queryForm = queryFormRepository.findById(queryFormId)
				.orElseThrow(() -> new RuntimeException("QueryForm Not Found with given ID"));

		return entityToDto(queryForm);
	}

	private QueryFormDTO entityToDto(QueryForm queryForm) {
		return mapper.map(queryForm, QueryFormDTO.class);
	}

	private QueryForm dtoToEntity(QueryFormDTO queryFormDTO) {
		return mapper.map(queryFormDTO, QueryForm.class);
	}
}
