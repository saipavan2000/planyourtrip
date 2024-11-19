package com.ABCPrivateLimited.PlanYourTrip.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ABCPrivateLimited.PlanYourTrip.Repository.BookTripRepository;
import com.ABCPrivateLimited.PlanYourTrip.model.BookedTrip;


@Service
public class BookTripService {

	@Autowired
	BookTripRepository bookTripRepository;
	
	public BookedTrip createTrip(BookedTrip bookedTrip) {
		return this.bookTripRepository.save(bookedTrip);
	}
	
	public void cancelTrip(Long id) {
		this.bookTripRepository.deleteById(id);
	}
	
	public List<BookedTrip> getBookedTripByUsername(String username){
		return this.bookTripRepository.findByUsername(username);
	}
}
