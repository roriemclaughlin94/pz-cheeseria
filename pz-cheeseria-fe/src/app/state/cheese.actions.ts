import { createAction } from '@ngrx/store';
import { Cheese } from '../models';

export const CheeseActions = {
	loadCheeses: createAction("LOAD_CHEESES"),
	loadCheesesSuccess: createAction("LOAD_CHEESES_SUCCESS", (cheeses: Cheese[]) => ({ cheeses })),
	deleteCheese: createAction("DELETE_CHEESE", (id: number) => ({ id })),
	deleteCheeseSuccess: createAction("DELETE_CHEESE_SUCCESS"),
	addCheese: createAction("ADD_CHEESE", (cheese: Cheese) => ({ cheese })),
	updateCheese: createAction("UPDATE_CHEESE", (cheese: Cheese) => ({ cheese })),
	updateCheeseSuccess: createAction("UPDATE_CHEESE_SUCCESS"),
	error: createAction("CHEESE_ERROR")
};
