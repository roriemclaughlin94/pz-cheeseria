import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CheeseInventoryComponent, CheeseSelectionComponent, RootComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './components/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { CheeseEffects } from './state';

@NgModule({
	declarations: [
		RootComponent,
		HomeComponent,
		CheeseSelectionComponent,
		CheeseInventoryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		EffectsModule.forRoot([CheeseEffects]),
		MatButtonModule,
		MatCardModule,
		MatDialogModule
	],
	providers: [],
	bootstrap: [RootComponent]
})
export class AppModule { }
