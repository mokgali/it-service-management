package com.itservicemanagement.spring.upskillspringframework.repository;


import java.util.Collection;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Client implements UserDetails {      
    
    @Id
    private String userName;
    private String password;
    private String role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       
       return Set.of();
    }
    @Override
    public String getPassword() {
       return password;
    }
    @Override
    public String getUsername() {      
        return userName;
    }
    @Override
    public boolean isAccountNonExpired() {
       return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
     return true;
    }
    @Override
    public boolean isEnabled() {
       return true;
    }
 
    
}
