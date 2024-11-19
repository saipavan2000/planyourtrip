package com.ABCPrivateLimited.PlanYourTrip.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ABCPrivateLimited.PlanYourTrip.model.TripPackage;

public interface TripPackageRepository extends JpaRepository<TripPackage, Long>{

	void deleteById(Long id);
	
	@Query(value="select * from trip_package p where p.id=?1",nativeQuery = true)
	public TripPackage findTripPackageById(Long id);

	@Query(value = "select * from trip_package t where t.name=?1", nativeQuery = true)
	TripPackage findTripPackageByName(String name);
}
