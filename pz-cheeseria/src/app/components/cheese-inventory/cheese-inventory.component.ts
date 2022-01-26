import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Cheese } from "src/app/models";
import { CheeseActions, CheeseSelectors } from "src/app/state";

@Component({
	selector: 'cheese-inventory',
	templateUrl: './cheese-inventory.component.html'
})

export class CheeseInventoryComponent {
	cheeses$ = this.store.select(CheeseSelectors.selectCheeses);

	constructor(private store: Store) { }

	update(cheese: Cheese) {
		this.store.dispatch(CheeseActions.updateCheese(cheese))
	}

	delete(cheeseId: number) {
		this.store.dispatch(CheeseActions.deleteCheese(cheeseId))
	}
}