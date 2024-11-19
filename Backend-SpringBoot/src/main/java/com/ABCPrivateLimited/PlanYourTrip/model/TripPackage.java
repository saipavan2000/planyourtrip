package com.ABCPrivateLimited.PlanYourTrip.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trip_package")
public class TripPackage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String city;
	private String country;
	private int price;
	
	public TripPackage() {}

	public TripPackage(Long id, String name, String city, String country, int price) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.country = country;
		this.price = price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "TripPackage [id=" + id + ", name=" + name + ", city=" + city + ", country=" + country + ", price="
				+ price + "]";
	}

	public TripPackage orElseThrow(Object object) {
		// TODO Auto-generated method stub
		return null;
	}



	
}
