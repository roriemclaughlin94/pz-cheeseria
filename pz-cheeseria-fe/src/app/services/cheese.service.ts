import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cheese } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class CheeseService extends ApiService {
	apiURL = "http://localhost:8080/cheese"


	getCheeses(): Observable<Cheese[]> {
		return this.get(`${this.apiURL}/cheeses`)
	}

	updateCheese(cheese: Cheese) {
		return this.put(`${this.apiURL}/${cheese.id}`, cheese)
	}

	deleteCheese(id: number) {
		return this.delete(`${this.apiURL}/${id}`)
	}

	addCheese(cheese: Cheese) {
		return this.post(`${this.apiURL}/add-cheese`, cheese)
	}
}
