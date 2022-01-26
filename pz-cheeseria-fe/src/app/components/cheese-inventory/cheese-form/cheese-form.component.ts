import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Cheese } from "src/app/models";


@Component({
	selector: 'cheese-form',
	templateUrl: './cheese-form.component.html'
})

export class CheeseFormComponent {
	@Input() cheese: Cheese;
	@Output() updateCheese = new EventEmitter();
	@Output() deleteCheese = new EventEmitter();
	formGroup = new FormGroup({
		id: new FormControl(""),
		name: new FormControl(null, Validators.required),
		pricePerKG: new FormControl(null, Validators.required),
		image: new FormControl(null, Validators.required),
		colour: new FormControl(null, Validators.required)
	});

	ngOnInit() {
		this.formGroup.patchValue(this.cheese);
	}

	update() {
		this.updateCheese.emit(this.formGroup.value)
		//TODO block edits/updates/deletes until 200/error?
	}

	delete() {
		this.deleteCheese.emit(this.formGroup.get('id')?.value)
	}
}