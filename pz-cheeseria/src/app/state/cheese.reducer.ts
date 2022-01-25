import { createReducer, on, Action } from '@ngrx/store';
import { CheeseActions } from './cheese.actions';
import { CheeseState } from './cheese.state';

export const cheeseInitialState: CheeseState = {
	cheeses: [],
	loadingCheese: false
};

const reducer = createReducer(
	cheeseInitialState,
	on(
		CheeseActions.loadCheeses,
		(state) => ({
			...state,
			loadingCheese: state.cheeses ? false : true //Only set loading on initial load
		})
	),

);

export function cheeseReducer(state: CheeseState | undefined, action: Action) {
	return reducer(state, action);
}
