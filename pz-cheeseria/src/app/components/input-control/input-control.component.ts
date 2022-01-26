import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
	selector: 'input-control',
	templateUrl: './input-control.component.html'
})

export class InputControlComponent {
	@Input() control: FormControl;
	@Input() label: string;
	@Input() inputType: number | string = 'string';
}