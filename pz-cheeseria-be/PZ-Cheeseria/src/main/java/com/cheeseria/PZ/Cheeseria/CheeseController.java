package com.cheeseria.PZ.Cheeseria;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin()
@RestController
@RequestMapping("/cheese")
public class CheeseController {
	private final CheeseRepository repository;

	CheeseController(CheeseRepository repository) {
		this.repository = repository;
	}

	@GetMapping("/cheeses")
	List<Cheese> all() {
		return repository.findAll();
	}

	@PostMapping("/add-cheese")
	Cheese addCheese(@RequestBody Cheese addCheese) {
		if (repository.count() == 5) {
			throw new StockFullException();
		}

		return repository.save(addCheese);
	}

	@PutMapping("/{id}")
	Cheese replaceCheese(@RequestBody Cheese newCheese, @PathVariable Long id) {
		return repository.findById(id)
				.map(cheese -> {
					cheese.setName(newCheese.getName());
					cheese.setImage(newCheese.getImage());
					cheese.setPricePerKG(newCheese.getPricePerKG());
					cheese.setColour(newCheese.getColour());
					return repository.save(cheese);
				})
				.orElseGet(() -> {
					newCheese.setId(id);
					return repository.save(newCheese);
				});
	}

	@DeleteMapping("/{id}")
	void deleteCheese(@PathVariable Long id) {
		repository.deleteById(id);
	}

}
