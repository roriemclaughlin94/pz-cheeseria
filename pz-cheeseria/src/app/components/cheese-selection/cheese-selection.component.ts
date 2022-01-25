import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { Cheese } from "src/app/models";
import { CheeseActions, CheeseSelectors } from "src/app/state";
import { CheeseCalculatorComponent } from "./cheese-calculator";

@Component({
	selector: 'cheese-selection',
	templateUrl: './cheese-selection.component.html',
	styleUrls: ['./cheese-selection.component.scss']
})

export class CheeseSelectionComponent {
	cheeses$ = this.store.select(CheeseSelectors.selectCheeses);
	dialogRef: MatDialogRef<CheeseCalculatorComponent>;

	constructor(private store: Store, public dialog: MatDialog) { }

	ngOnInit() {
		this.store.dispatch(CheeseActions.loadCheeses())
	}

	calculateDialog() {
		this.dialogRef = this.dialog.open(CheeseCalculatorComponent, {
			panelClass: 'modal-dialog',
			height: 'auto',
			width: '500px',
			data: { cheeses$: this.cheeses$ }
		});
	}
}