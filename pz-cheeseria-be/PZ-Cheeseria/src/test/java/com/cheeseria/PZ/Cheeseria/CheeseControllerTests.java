package com.cheeseria.PZ.Cheeseria;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@TestInstance(Lifecycle.PER_CLASS)
public class CheeseControllerTests {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private CheeseRepository repository;

	private CheeseController c;

	@BeforeAll
    public void setup() {
		this.c = new CheeseController(repository);
    }

	@Test
	public void emptyListOfCheeses() {		
		Iterable<Cheese> cheeses = c.all();
		assertThat(cheeses).isEmpty();
	}

	@Test
	public void addNewCheese() {
		Cheese cheese = createSingleCheese();
		this.c.addCheese(cheese);
		assertThat(c.all()).hasSize(1);

		Cheese x = repository.findById(cheese.getId()).get();		
		assertThat(cheese).isEqualTo(x);
	}

	@Test
	public void getCheeses() {
		this.entityManager.persist(createSingleCheese());
		this.entityManager.persist(createSingleCheese());
		this.entityManager.persist(createSingleCheese());
		List<Cheese> list = Arrays
				.asList(new Cheese[] { createSingleCheese(), createSingleCheese(), createSingleCheese() });

		assertThat(this.c.all()).usingRecursiveComparison().ignoringFields("id").isEqualTo(list);
	}

	@Test
	public void deleteCheese() {
		Cheese cheeseOne = createSingleCheese();
		Cheese cheeseTwo = createSingleCheese();
		this.entityManager.persist(cheeseOne);
		this.entityManager.persist(cheeseTwo);

		repository.deleteById(cheeseOne.getId());

		List<Cheese> cheeses = repository.findAll();
		assertThat(cheeses).hasSize(1).contains(cheeseTwo);
	}

	//Update cheese

	private static Cheese createSingleCheese() {
		return new Cheese("Brie", new BigDecimal(15.00),
				"https://cheese.com/media/img/cheese/27-aged-british-cheddar-shutterstock_1125720782.jpg",
				"Yellow");
	}

}
