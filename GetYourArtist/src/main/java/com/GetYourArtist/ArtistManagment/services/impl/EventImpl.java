package com.GetYourArtist.ArtistManagment.services.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GetYourArtist.ArtistManagment.dtos.EventDTO;
import com.GetYourArtist.ArtistManagment.entities.Event;
import com.GetYourArtist.ArtistManagment.repositories.EventRepository;
import com.GetYourArtist.ArtistManagment.services.EventService;

@Service
public class EventImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public EventDTO createEvent(EventDTO eventDTO) {
        // Convert DTO to Entity
        Event event = dtoToEntity(eventDTO);
        // Save entity to the database
        Event savedEvent = eventRepository.save(event);
        // Convert saved entity back to DTO
        return entityToDto(savedEvent);
    }

    @Override
    public EventDTO updateEvent(EventDTO eventDTO, String eventId) {
        // Find the existing event
        Event existingEvent = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event Not Found with given ID"));
        // Update fields
        existingEvent.setEventDate(eventDTO.getEventDate());
        existingEvent.setCreatedDate(eventDTO.getCreatedDate());
        existingEvent.setUpdateDate(eventDTO.getUpdateDate());
        existingEvent.setStatus(eventDTO.getStatus());
        existingEvent.setDetails(eventDTO.getDetails());
        // Save updated entity
        Event updatedEvent = eventRepository.save(existingEvent);
        // Convert updated entity back to DTO
        return entityToDto(updatedEvent);
    }

    @Override
    public void deleteEvent(String eventId) {
        eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event Not Found with given ID"));
        eventRepository.deleteById(eventId);
    }

    @Override
    public EventDTO getEventById(String eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event Not Found with given ID"));
        return entityToDto(event);
    }

    @Override
    public List<EventDTO> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream().map(this::entityToDto).collect(Collectors.toList());
    }

    @Override
    public List<EventDTO> getEventsByStatus(String status) {
        List<Event> events = eventRepository.findByStatus(status);
        return events.stream().map(this::entityToDto).collect(Collectors.toList());
    }

    @Override
    public List<EventDTO> getEventsByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        List<Event> events = eventRepository.findByEventDateBetween(startDate, endDate);
        return events.stream().map(this::entityToDto).collect(Collectors.toList());
    }

    @Override
    public List<EventDTO> searchEventsByDetails(String keyword) {
        List<Event> events = eventRepository.findByDetailsContainingIgnoreCase(keyword);
        return events.stream().map(this::entityToDto).collect(Collectors.toList());
    }

    private Event dtoToEntity(EventDTO eventDTO) {
        return modelMapper.map(eventDTO, Event.class);
    }

    private EventDTO entityToDto(Event event) {
        return modelMapper.map(event, EventDTO.class);
    }
}
