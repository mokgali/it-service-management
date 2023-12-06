package com.itservicemanagement.spring.upskillspringframework.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.itservicemanagement.spring.upskillspringframework.repository.ClientsRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClientUserDetailsService implements UserDetailsService {


    private final ClientsRepository repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
      
       return repo.findByUserName(username).orElseThrow(()->new UsernameNotFoundException("UserName "+username+ "not found"));
    }


}

