package com.cheeseria.PZ.Cheeseria;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class StockFullAdvice {

	@ResponseBody
	@ExceptionHandler(StockFullException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	String stockFullHandler(StockFullException ex) {
		return ex.getMessage();
	}
}
