import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SnackbarService {

	constructor(private snackBar: MatSnackBar) { }

	show(message: string) {
		this.snackBar.open(message, 'Dismiss');
	}
}