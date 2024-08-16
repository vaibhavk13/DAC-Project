package com.GetYourArtist.ArtistManagment.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.GetYourArtist.ArtistManagment.dtos.EventDTO;
import com.GetYourArtist.ArtistManagment.services.EventService;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    // Create a new event
    @PostMapping
    public ResponseEntity<EventDTO> createEvent(@RequestBody EventDTO eventDTO) {
        EventDTO createdEvent = eventService.createEvent(eventDTO);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    // Update an existing event
    @PutMapping("/{eventId}")
    public ResponseEntity<EventDTO> updateEvent(@PathVariable("eventId") String eventId, @RequestBody EventDTO eventDTO) {
        EventDTO updatedEvent = eventService.updateEvent(eventDTO, eventId);
        return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
    }

    // Delete an event
    @DeleteMapping("/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable("eventId") String eventId) {
        eventService.deleteEvent(eventId);
        return new ResponseEntity<>("Event deleted successfully", HttpStatus.OK);
    }

    // Get an event by ID
    @GetMapping("/{eventId}")
    public ResponseEntity<EventDTO> getEventById(@PathVariable("eventId") String eventId) {
        EventDTO event = eventService.getEventById(eventId);
        return new ResponseEntity<>(event, HttpStatus.OK);
    }

    // Get all events
    @GetMapping
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        List<EventDTO> events = eventService.getAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    // Get events by status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<EventDTO>> getEventsByStatus(@PathVariable("status") String status) {
        List<EventDTO> events = eventService.getEventsByStatus(status);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    // Get events by date range
    @GetMapping("/date-range")
    public ResponseEntity<List<EventDTO>> getEventsByDateRange(
            @RequestParam("startDate") LocalDateTime startDate,
            @RequestParam("endDate") LocalDateTime endDate) {
        List<EventDTO> events = eventService.getEventsByDateRange(startDate, endDate);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    // Search events by details
    @GetMapping("/search")
    public ResponseEntity<List<EventDTO>> searchEventsByDetails(@RequestParam("keyword") String keyword) {
        List<EventDTO> events = eventService.searchEventsByDetails(keyword);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }
}
