package com.cheeseria.PZ.Cheeseria;

import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@Configuration
public class LoadDatabase {

	@Bean
	CommandLineRunner initDatabase(CheeseRepository repository) {
		return args -> {
			repository.save(new Cheese("Wensleydale /w Cranberries", new BigDecimal(20.80),
					"http://localhost:4200/assets/img/brie.jpg",
					"White/Red"));
			repository.save(
					new Cheese("Brie Av Poivre", new BigDecimal(33.50), "http://localhost:4200/assets/img/brie.jpg",
							"White/Yellow"));
			repository.save(new Cheese("Jarlsberg", new BigDecimal(29.00), "http://localhost:4200/assets/img/brie.jpg",
					"White"));
			repository.save(new Cheese("Smoked Gouda", new BigDecimal(17.75),
					"http://localhost:4200/assets/img/brie.jpg", "Orange"));
			repository.save(
					new Cheese("Parmigiano Reggiano", new BigDecimal(55.00),
							"http://localhost:4200/assets/img/brie.jpg", "Yellow"));
		};
	}
}
