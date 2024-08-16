package com.GetYourArtist.ArtistManagment.entities;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Events")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {

    @Id
    @Field(name = "Event_Id")
    private String id;

    @Field(name = "Event_Date")
    private LocalDateTime eventDate;

    @Field(name = "Created_Date")
    private LocalDateTime createdDate;

    @Field(name = "Update_Date")
    private LocalDateTime updateDate;

    @Field(name = "Status")
    private String status;

    @Field(name = "Details")
    private String details;
}
