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
		ofType(CheeseActions.loadCheeses, CheeseActions.updateCheeseSuccess, CheeseActions.deleteCheeseSuccess),
		exhaustMap(() =>
			this.cheeseService.getCheeses().pipe(
				map((cheeses: Cheese[]) => CheeseActions.loadCheesesSuccess(cheeses)),
				catchError(error => of(CheeseActions.error()))
			))));

	updateCheese$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.updateCheese),
		exhaustMap((cheese) =>
			this.cheeseService.updateCheese().pipe(
				map(() => CheeseActions.updateCheeseSuccess()),
				catchError(error => of(CheeseActions.error()))
			))));

	deleteCheese$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.deleteCheese),
		exhaustMap(({ id }) =>
			this.cheeseService.deleteCheese(id).pipe(
				map(() => CheeseActions.deleteCheeseSuccess()),
				catchError(error => of(CheeseActions.error()))
			))));

}
