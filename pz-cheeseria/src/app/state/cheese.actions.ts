import { createAction } from '@ngrx/store';
import { Cheese } from '../models';

export const CheeseActions = {

	loadCheeses: createAction("LOAD_CHEESES"),
	loadCheesesSuccess: createAction("LOAD_CHEESES_SUCCESS", (cheeses) => ({ cheeses })),
	deleteCheese: createAction("DELETE_CHEESE", (id: boolean) => ({ id })),
	deleteCheeseSuccess: createAction("DELETE_CHEESE", (id: boolean) => ({ id })),
	addCheese: createAction("ADD_CHEESE", (cheese: Cheese) => ({ cheese })),
	updateCheese: createAction("UPDATE_CHEESE", (cheese: Cheese) => ({ cheese })),

	error: createAction("CHEESE_ERROR")

};
