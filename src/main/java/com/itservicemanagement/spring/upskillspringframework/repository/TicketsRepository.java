package com.itservicemanagement.spring.upskillspringframework.repository;

import java.util.List;
import java.util.Optional;
import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;


public interface TicketsRepository extends JpaRepository<Ticket,String> {   
    
    public Optional<List<Ticket>> findByCreatedBy(String createdBy);
    public Optional<List<Ticket>> findByCreatedByAndOpeningDateAfter(String createdBy,Date openingDate);
} 



