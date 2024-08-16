package com.GetYourArtist.ArtistManagment.dtos;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventDTO {

    private String id; 

    private LocalDateTime eventDate;

    private LocalDateTime createdDate;

    private LocalDateTime updateDate;

    private String status;

    private String details;
}
