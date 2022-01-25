import { Cheese } from "../models";

export interface CheeseState {
	/** List of cheeses*/
	cheeses: Cheese[];
	loadingCheese: boolean;}
