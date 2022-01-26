import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { CheeseActions } from './cheese.actions';
import { CheeseService, SnackbarService } from '../services';
import { Cheese } from '../models';


@Injectable()
export class CheeseEffects {

	constructor(private action$: Actions, private cheeseService: CheeseService, private snackbarService: SnackbarService) { }

	loadCheeses$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.loadCheeses, CheeseActions.updateCheeseSuccess, CheeseActions.deleteCheeseSuccess, CheeseActions.addCheeseSuccess),
		exhaustMap(() =>
			this.cheeseService.getCheeses().pipe(
				map((cheeses: Cheese[]) => CheeseActions.loadCheesesSuccess(cheeses)),
				catchError(({ error }) => of(CheeseActions.error(error)))
			))));

	updateCheese$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.updateCheese),
		exhaustMap(({ cheese }) =>
			this.cheeseService.updateCheese(cheese).pipe(
				map(() => CheeseActions.updateCheeseSuccess()),
				catchError(({ error }) => of(CheeseActions.error(error)))
			))));

	deleteCheese$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.deleteCheese),
		exhaustMap(({ id }) =>
			this.cheeseService.deleteCheese(id).pipe(
				map(() => CheeseActions.deleteCheeseSuccess()),
				catchError(({ error }) => of(CheeseActions.error(error)))
			))));

	addCheese$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.addCheese),
		exhaustMap(({ cheese }) =>
			this.cheeseService.addCheese(cheese).pipe(
				map(() => CheeseActions.addCheeseSuccess()),
				catchError(({ error }) => of(CheeseActions.error(error)))
			))));

	error$ = createEffect(() => this.action$.pipe(
		ofType(CheeseActions.error),
		tap(({ error }) =>
			this.snackbarService.show(error))
	), { dispatch: false });

}
