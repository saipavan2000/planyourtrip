package com.ABCPrivateLimited.PlanYourTrip.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ABCPrivateLimited.PlanYourTrip.Service.BookTripService;
import com.ABCPrivateLimited.PlanYourTrip.model.BookedTrip;
import com.ABCPrivateLimited.PlanYourTrip.model.TripPackage;

@RestController
@CrossOrigin("*")
@RequestMapping("/booktrip")
public class BookingController {
	
	@Autowired
	BookTripService bookTripService;
	
	@PostMapping("/")
	public ResponseEntity<BookedTrip> createBooking(@RequestBody BookedTrip bookedTrip){
			BookedTrip local = bookTripService.createTrip(bookedTrip);
			return new ResponseEntity<BookedTrip>(local,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/cancel/{id}")
	public ResponseEntity<?> cancelTrip(@PathVariable Long id){
		this.bookTripService.cancelTrip(id);
		return new ResponseEntity(HttpStatus.OK);
	}

	@GetMapping("/{username}")
	public ResponseEntity<List<BookedTrip>> getBookedTripsByUsername(@PathVariable String username){
		List<BookedTrip> bookedTrips= bookTripService.getBookedTripByUsername(username);
		return new ResponseEntity<List<BookedTrip>>(bookedTrips,HttpStatus.OK);
	}
	

}
