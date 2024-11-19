package com.ABCPrivateLimited.PlanYourTrip.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import com.ABCPrivateLimited.PlanYourTrip.JWT.JwtUtil;
import com.ABCPrivateLimited.PlanYourTrip.Repository.UserRepository;
import com.ABCPrivateLimited.PlanYourTrip.config.UserDetailsServiceImpl;
import com.ABCPrivateLimited.PlanYourTrip.dto.JwtRequest;
import com.ABCPrivateLimited.PlanYourTrip.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private UserDetailsServiceImpl customUserDetailsService;

	public void signup(User user) throws Exception {
		User local = this.userRepository.findByUsername(user.getUsername());
		if(local!=null) {
			System.out.println("User already exists!");
			throw new Exception("User already exists!");
		}
		else {
			user.setRole("USER");
			local = this.userRepository.save(user);
		}
	}

	public User getUserByName(String username) {
		return userRepository.findByUsername(username);
	}
	
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);
	}
	
	
	
}
