package com.itservicemanagement.spring.upskillspringframework.controller;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itservicemanagement.spring.upskillspringframework.repository.User;
import com.itservicemanagement.spring.upskillspringframework.repository.UsersRepository;

@RestController
@RequestMapping("/users")
public class UsersController {

    private final UsersRepository usersRepository;

    public UsersController(UsersRepository usersRepository){
        this.usersRepository=usersRepository;
    }

    
    @GetMapping()
    public List<User> getUsers() {
      return usersRepository.findAll();    
    }        
    

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
       return usersRepository.findById(id).orElseThrow(RuntimeException::new);
        
    }

    @PostMapping
    public ResponseEntity createClient(@RequestBody User user) throws URISyntaxException {
        User savedUser = usersRepository.save(user);
        return ResponseEntity.created(new URI("/users/" + savedUser.getId())).body(savedUser);
    }

}
