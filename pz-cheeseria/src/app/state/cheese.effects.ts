import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { exhaustMap, catchError, map } from 'rxjs/operators';
import { CheeseActions } from './cheese.actions';
import { CheeseService } from '../services';
import { Cheese } from '../models';


@Injectable()
export class CheeseEffects {

	constructor(private action$: Actions, private cheeseService: CheeseService) { }

	loadCheeses$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.loadCheeses),
		exhaustMap(() =>
			this.cheeseService.getCheeses().pipe(
				map((cheeses: Cheese[]) => CheeseActions.loadCheesesSuccess(cheeses)),
				catchError(error => of(CheeseActions.error()))
			))));



}
