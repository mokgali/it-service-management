package com.itservicemanagement.spring.upskillspringframework.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ClientsRepository extends JpaRepository<Client,String> {

    public Optional<Client> findByUserName(String userName);
    public Optional<Client> findByUserNameAndPassword(String userName,String password);

    
} 
