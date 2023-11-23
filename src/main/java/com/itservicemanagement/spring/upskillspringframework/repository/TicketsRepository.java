package com.itservicemanagement.spring.upskillspringframework.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface TicketsRepository extends JpaRepository<Ticket,String> {   
    
    public Optional<Ticket> findByCreatedBy(String createdBy);
} 
