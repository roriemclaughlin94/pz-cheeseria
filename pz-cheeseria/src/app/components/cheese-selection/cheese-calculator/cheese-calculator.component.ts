import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";

@Component({
	selector: 'cheese-calculator',
	templateUrl: './cheese-calculator.component.html'
})

export class CheeseCalculatorComponent {
	formGroup = new FormGroup({
		selectedCheese: new FormControl(null, Validators.required),
		weightInGrams: new FormControl(null, Validators.required)
	})
	sub: Subscription;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CheeseCalculatorComponent>) { }

}