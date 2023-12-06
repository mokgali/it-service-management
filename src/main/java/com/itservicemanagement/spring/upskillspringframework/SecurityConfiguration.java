package com.itservicemanagement.spring.upskillspringframework;



import javax.sql.DataSource;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;

import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration  {

/*     @Bean
    DataSource dataSource(){
    return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .setName("ticketsmanagement")
                .setUrl
                .addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)
                .build();

    }
 */
    @Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests((authorize) -> authorize
				.requestMatchers(AntPathRequestMatcher.antMatcher("/clients/**")).permitAll()
                .requestMatchers(AntPathRequestMatcher.antMatcher("/tickets/**")).permitAll()
                .requestMatchers(AntPathRequestMatcher.antMatcher("/")).permitAll()
                .requestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**")).permitAll()
				.anyRequest().authenticated()
                
			)      
        .csrf(AbstractHttpConfigurer::disable)
        .headers(httpSecurityHeadersConfigurer -> httpSecurityHeadersConfigurer.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable));
	return http.build();
	}

/* @Bean
JdbcUserDetailsManager jdbcUserDetailsManager(DataSource dataSource){
 JdbcUserDetailsManager jdbcUserDetailsManager =new JdbcUserDetailsManager(dataSource)  ;
 jdbcUserDetailsManager.loadUserByUsername(null)
 return jdbcUserDetailsManager ;
} */
    
}
