package com.ABCPrivateLimited.PlanYourTrip.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="booked_trip")
public class BookedTrip {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String username;
	private	String tripname;
	private String startDate;
	private String endDate;
	private int totalCost;
	
	public BookedTrip() {
	}
	
	

	
	public BookedTrip(Long id, String username, String tripname, String startDate, String endDate, int totalCost) {
		super();
		this.id = id;
		this.username = username;
		this.tripname = tripname;
		this.startDate = startDate;
		this.endDate = endDate;
		this.totalCost = totalCost;
	}




	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTripname() {
		return tripname;
	}

	public void setTripname(String tripname) {
		this.tripname = tripname;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public int getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(int totalCost) {
		this.totalCost = totalCost;
	}

	@Override
	public String toString() {
		return "BookedTrip [id=" + id + ", username=" + username + ", tripname=" + tripname + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", totalCost=" + totalCost + "]";
	}
	
	
	
}
