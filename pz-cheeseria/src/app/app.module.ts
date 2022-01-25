import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CheeseCalculatorComponent, CheeseInventoryComponent, CheeseSelectionComponent, RootComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { CheeseEffects, CheeseFeature } from './state';
import { StoreModule } from '@ngrx/store';
import { CheeseService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { metaReducers, rootReducers } from './rootReducers';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		RootComponent,
		HomeComponent,
		CheeseSelectionComponent,
		CheeseInventoryComponent,
		CheeseCalculatorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(rootReducers, { metaReducers }),
		StoreModule.forFeature(CheeseFeature.name, CheeseFeature.reducers),
		EffectsModule.forRoot([CheeseEffects]),
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule
	],

	providers: [CheeseService, CheeseCalculatorComponent],
	bootstrap: [RootComponent]
})

export class AppModule { }
