package com.cheeseria.PZ.Cheeseria;

public class StockFullException extends RuntimeException {

	StockFullException() {
      super("Can't hold any more stock - Limit is 5 cheeses ");
    }
}
