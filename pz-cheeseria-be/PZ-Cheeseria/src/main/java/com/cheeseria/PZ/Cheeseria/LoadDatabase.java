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
					"https://cheese.com/media/img/cheese/Wensleydale_with_Cranberries_cheese.jpg",
					"White/Red"));
			repository.save(
					new Cheese("Brie Av Poivre", new BigDecimal(33.50), "https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg",
							"White/Yellow"));
			repository.save(new Cheese("Jarlsberg", new BigDecimal(29.00), "https://cheese.com/media/img/cheese/Jarlsberg_in_Wholefoods_2.jpg",
					"White"));
			repository.save(new Cheese("Smoked Gouda", new BigDecimal(17.75),
					"https://cheese.com/media/img/cheese/smoked_Gouda.jpg", "Orange"));
			repository.save(
					new Cheese("Parmigiano Reggiano", new BigDecimal(55.00),
							"https://cheese.com/media/img/cheese/Parmigiano_reggiano_piece_1.jpg", "Yellow"));
		};
	}
}
