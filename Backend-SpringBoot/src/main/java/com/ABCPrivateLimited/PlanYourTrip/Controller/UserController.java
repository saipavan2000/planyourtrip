 package com.ABCPrivateLimited.PlanYourTrip.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ABCPrivateLimited.PlanYourTrip.Service.UserService;
import com.ABCPrivateLimited.PlanYourTrip.dto.JwtRequest;
import com.ABCPrivateLimited.PlanYourTrip.model.User;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/signup")
	public ResponseEntity<String> signup(@RequestBody User user) throws Exception {
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		userService.signup(user);
		return new ResponseEntity<String>("User Created Successfully", HttpStatus.OK);
	}


	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String usernamme) {
		return this.userService.getUserByName(usernamme);
	}
	
	@DeleteMapping("{userID}")
	public void deleteUserById(@PathVariable("userId") Long userId) {
		this.userService.deleteUser(userId);
	}


}
