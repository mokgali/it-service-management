package com.itservicemanagement.spring.upskillspringframework.repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Client {      
    
    @Id
    private String email;
    private String name;

    protected Client(){

    }

    public Client(String name, String email) {
        this.name = name;
        this.email = email;
      }  
 

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
}
