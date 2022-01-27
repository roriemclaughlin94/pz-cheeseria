package com.cheeseria.PZ.Cheeseria;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cheese {
	private @Id @GeneratedValue Long id;
	private String name;
	private BigDecimal pricePerKG;
	private String image;
	private String colour;

	Cheese() {
	}

	Cheese(String name, BigDecimal pricePerKG, String image, String colour) {
		this.name = name;
		this.pricePerKG = pricePerKG;
		this.image = image; // TODO kibosh string and use a byte[]
		this.colour = colour;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPricePerKG() {
		return this.pricePerKG;
	}

	public void setPricePerKG(BigDecimal pricePerKG) {
		this.pricePerKG = pricePerKG;
	}

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getColour() {
		return this.colour;
	}

	public void setColour(String colour) {
		this.colour = colour;
	}

}
