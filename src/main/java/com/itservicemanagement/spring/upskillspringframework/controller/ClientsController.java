package com.itservicemanagement.spring.upskillspringframework.controller;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
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
public class ClientsController {

    private final ClientsRepository clientsRepository;

    public ClientsController(ClientsRepository clientsRepository){
        this.clientsRepository=clientsRepository;
    }

    
    @GetMapping()
    public List<Client> getClients() {
      return clientsRepository.findAll();    
    }        
    

    @GetMapping("/{email}")
    public Client getClient(@PathVariable String email) {
       return clientsRepository.findByEmail(email).orElseThrow(RuntimeException::new);

    }

    @PostMapping
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        Client savedClient = clientsRepository.save(client);
        return ResponseEntity.created(new URI("/clients/" + savedClient.getEmail())).body(savedClient);
    }

}
