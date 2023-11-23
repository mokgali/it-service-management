package com.itservicemanagement.spring.upskillspringframework.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ClientsRepository extends JpaRepository<Client,String> {

    public List<Client> findByEmail(String email);

    
} 
