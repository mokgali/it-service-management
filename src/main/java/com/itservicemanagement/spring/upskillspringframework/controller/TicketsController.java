package com.itservicemanagement.spring.upskillspringframework.controller;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itservicemanagement.spring.upskillspringframework.repository.Ticket;
import com.itservicemanagement.spring.upskillspringframework.repository.TicketsRepository;

@RestController
@RequestMapping("/tickets")
public class TicketsController{

  private final TicketsRepository ticketsRepository;

    public TicketsController(TicketsRepository requestsRepository){

        this.ticketsRepository=requestsRepository;
    }

    @GetMapping()
    public List<Ticket> getTickets() {
      return ticketsRepository.findAll();    
    }        
    

    @GetMapping("/{createdBy}")
    public List<Ticket> getTicketsForUser(@PathVariable String createdBy) {
       return ticketsRepository.findByCreatedBy(createdBy).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createTicket(@RequestBody Ticket ticket) throws URISyntaxException {
        Ticket savedTicket = ticketsRepository.save(ticket);
        return ResponseEntity.created(new URI("/tickets/" + savedTicket.getCreatedBy())).body(savedTicket);
    }

    
    @GetMapping("/{createdBy}/{openingDate}")
    public List<Ticket> getUserTicketsForDateRange(@PathVariable String createdBy,@PathVariable Date openingDate) {
       return ticketsRepository.findByCreatedByAndOpeningDateAfter(createdBy,openingDate).orElseThrow(RuntimeException::new);
    }




}