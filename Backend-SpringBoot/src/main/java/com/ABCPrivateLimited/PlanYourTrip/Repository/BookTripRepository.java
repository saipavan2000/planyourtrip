package com.ABCPrivateLimited.PlanYourTrip.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ABCPrivateLimited.PlanYourTrip.model.BookedTrip;

@Repository
public interface BookTripRepository extends JpaRepository<BookedTrip, Long>{
	void deleteById(Long id);

	@Query(value = "select * from booked_trip b where b.username=?1", nativeQuery = true)
	public List<BookedTrip> findByUsername(String username);
}
