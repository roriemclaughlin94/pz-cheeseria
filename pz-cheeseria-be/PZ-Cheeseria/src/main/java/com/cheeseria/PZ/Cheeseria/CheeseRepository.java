package com.cheeseria.PZ.Cheeseria;

import org.springframework.data.jpa.repository.JpaRepository;

interface CheeseRepository extends JpaRepository<Cheese, Long> {
}
