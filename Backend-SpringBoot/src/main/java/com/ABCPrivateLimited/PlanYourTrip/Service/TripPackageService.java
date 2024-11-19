package com.ABCPrivateLimited.PlanYourTrip.Service;

import java.util.List;
import java.util.Optional;
import com.ABCPrivateLimited.PlanYourTrip.Exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ABCPrivateLimited.PlanYourTrip.Repository.TripPackageRepository;
import com.ABCPrivateLimited.PlanYourTrip.model.TripPackage;

@Service
public class TripPackageService {
	
	@Autowired
	private TripPackageRepository tripPackageRepository;
	

	public TripPackage addTripPackage(TripPackage tripPackage) {
		return tripPackageRepository.save(tripPackage);
	}
	
	public List<TripPackage> findAllTripPackages(){
		return tripPackageRepository.findAll();
	}
	
	public TripPackage updateTripPackage(TripPackage tripPackage) {
		return tripPackageRepository.save(tripPackage);
	}
	
	public void deleteTripPackage(Long id) {
		tripPackageRepository.deleteById(id);
	}
	
	public TripPackage findTripPackageByName(String name) {
		return tripPackageRepository.findTripPackageByName(name);
	}

	public TripPackage findTripById(Long id) {
		return tripPackageRepository.findTripPackageById(id);
		
	}
}
