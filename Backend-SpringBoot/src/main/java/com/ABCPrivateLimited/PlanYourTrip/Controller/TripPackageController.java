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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ABCPrivateLimited.PlanYourTrip.Service.TripPackageService;
import com.ABCPrivateLimited.PlanYourTrip.model.TripPackage;

@RestController
@RequestMapping("/packages")
@CrossOrigin("*")
public class TripPackageController {
	
	@Autowired
	private TripPackageService tripPackageService;
	
	@PostMapping("/add")
	public ResponseEntity<TripPackage> addPackage(@RequestBody TripPackage tripPackage){
		TripPackage newTripPackage = tripPackageService.addTripPackage(tripPackage);
		return new ResponseEntity<TripPackage>(newTripPackage,HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<TripPackage>> getAllPackages(){
		List<TripPackage> tripPackages = tripPackageService.findAllTripPackages();
		return new ResponseEntity<List<TripPackage>>(tripPackages,HttpStatus.OK);
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<TripPackage> getTripPackageByName(@PathVariable("name") String name){
		TripPackage tripPackage = tripPackageService.findTripPackageByName(name);
		return new ResponseEntity<TripPackage>(tripPackage, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<TripPackage> getTripPackageById(@PathVariable("id") Long id){
		TripPackage tripPackage = this.tripPackageService.findTripById(id);
		return new ResponseEntity<TripPackage>(tripPackage, HttpStatus.OK);
	}
	
	@PutMapping("/update")
	public ResponseEntity<TripPackage> updateTripPackage(@RequestBody TripPackage tripPackage){
		TripPackage updatedTripPackage = tripPackageService.updateTripPackage(tripPackage);
		return new ResponseEntity<TripPackage>(updatedTripPackage, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteTripPackage(@PathVariable("id") Long id){
		tripPackageService.deleteTripPackage(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
