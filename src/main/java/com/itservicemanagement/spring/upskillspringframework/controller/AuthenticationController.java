package com.itservicemanagement.spring.upskillspringframework.controller;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itservicemanagement.spring.upskillspringframework.repository.Client;
import com.itservicemanagement.spring.upskillspringframework.repository.ClientsRepository;

@RestController
@RequestMapping("/clients")
public class AuthenticationController {

    private final ClientsRepository usersRepository;

    public AuthenticationController(ClientsRepository usersRepository){
        this.usersRepository=usersRepository;        
    }

    
    @GetMapping()
    public List<Client> getClients() {
      return usersRepository.findAll();    
    }        
    

    @PostMapping("/{userName}/{password}")
    public Client login(@PathVariable String userName,@PathVariable String password) {
       return usersRepository.findByUserName(userName).orElseThrow(RuntimeException::new);    

    }

    @PostMapping
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        Client savedClient = usersRepository.save(client);
        return ResponseEntity.created(new URI("/users/" + savedClient.getUsername())).body(savedClient);
    }

}
