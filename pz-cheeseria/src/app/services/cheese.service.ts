import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ApiService } from './api.service';


@Injectable()
export class CheeseService extends ApiService {

	getCheeses() {
		return of([{ id: 1, name: 'brie', costPerKG: 4.50, image: '', colour: 'white/yellow'}, { id: 2, name: 'Gouda', costPerKG: 2.10, image: '', colour: 'yellow'}])
	}

}
