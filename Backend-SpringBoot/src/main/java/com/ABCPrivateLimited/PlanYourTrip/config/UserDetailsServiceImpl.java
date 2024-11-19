package com.ABCPrivateLimited.PlanYourTrip.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.ABCPrivateLimited.PlanYourTrip.Repository.UserRepository;
import com.ABCPrivateLimited.PlanYourTrip.model.User;

@Component
public class UserDetailsServiceImpl implements UserDetailsService{

	
	@Autowired
	private UserRepository userRepository;
	
	private User user;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		user = userRepository.findByUsername(username);
		if(user==null) {
			System.out.println("User not found");
			throw new UsernameNotFoundException("User not found!");
		}
		return user;
	}
}
