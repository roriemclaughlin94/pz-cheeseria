import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CheeseActions } from "src/app/state";

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})

export class HomeComponent {

	constructor(private store: Store) { }

	ngOnInit() {
		this.store.dispatch(CheeseActions.loadCheeses())
	}
 }