package com.cheeseria.PZ.Cheeseria;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@CrossOrigin()
@RestController
@RequestMapping("/cheese")
public class CheeseController {
	private final CheeseRepository repository;

	CheeseController(CheeseRepository repository) {
		this.repository = repository;
	}

	@GetMapping(path = "/cheeses", produces = "application/json")
	@ApiOperation(value = "Returns all cheeses")
	@ResponseStatus(HttpStatus.OK)
	List<Cheese> all() {
		return repository.findAll();
	}

	@PostMapping(path = "/add-cheese", produces = "application/json")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Adds a new cheese.", notes = "Cheese inventory in this task is set to 5. If you attempt to create >5 cheeses this will fail")
	Cheese addCheese(@RequestBody Cheese addCheese) {
		if (repository.count() >= 5) {
			throw new StockFullException();
		}

		return repository.save(addCheese);
	}

	@PutMapping(path = "/{id}", produces = "application/json")
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "OK"),
			@ApiResponse(code = 400, message = "Stock full exception") })
	@ApiOperation(value = "Replaces an existing cheese.", notes = "To find a cheese's id, call GET /cheese/cheeses to find a valid id, otherwise request will fail if invalid id supplied.")
	Cheese replaceCheese(@RequestBody(required = true) Cheese updatedCheese,
			@ApiParam(value = "Unique id of the cheese your updating.", required = true) @PathVariable Long id) {
		return repository.findById(id)
				.map(cheese -> {
					cheese.setName(updatedCheese.getName());
					cheese.setImage(updatedCheese.getImage());
					cheese.setPricePerKG(updatedCheese.getPricePerKG());
					cheese.setColour(updatedCheese.getColour());
					return repository.save(cheese);
				})
				.orElseGet(() -> {
					// Should never happen
					this.checkStockCount();
					updatedCheese.setId(id);
					return repository.save(updatedCheese);
				});
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	@ApiOperation(value = "Deletes a cheese using supplied id", notes = "To find a cheese's id, call GET /cheese/cheeses to find a valid id, otherwise request will fail if invalid id supplied.")
	void deleteCheese(@PathVariable Long id) {
		repository.deleteById(id);
	}

	private void checkStockCount() {
		if (repository.count() == 5) {
			throw new StockFullException();
		}
	}

}
