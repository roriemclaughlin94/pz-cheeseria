import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cheeseReducer } from "./cheese.reducer";
import { CheeseState } from "./cheese.state";

export interface CheeseFeatureState {
	cheeseState: CheeseState;
}

export const CheeseFeature = {
	name: "cheese",
	reducers: {
		cheeseState: cheeseReducer,
	}
};

const selectFeature = createFeatureSelector<CheeseFeatureState>(CheeseFeature.name);
const selectCheeseState = createSelector(selectFeature, (state: CheeseFeatureState) => state.cheeseState);
const selectCheeses = createSelector(selectCheeseState, (state: CheeseState) => state?.cheeses);

export const CheeseSelectors = {
	selectCheeses
};
