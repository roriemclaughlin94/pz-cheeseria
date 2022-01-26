import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cheese } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class CheeseService extends ApiService {

	getCheeses(): Observable<Cheese[]> {
		return of([{ id: '1', name: 'Brie', pricePerKG: 4.50, image: 'http://localhost:4200/assets/img/brie.jpg', colour: 'white/yellow' }, { id: '2', name: 'Gouda', pricePerKG: 2.10, image: 'http://localhost:4200/assets/img/brie.jpg', colour: 'yellow' },{ id: '3', name: 'Jarlsberg', pricePerKG: 9.75, image: 'http://localhost:4200/assets/img/brie.jpg', colour: 'white' }])
	}

	updateCheese() {
		return of(true);
	}

	deleteCheese(id: number) {
		return of(true);
	}
}
