import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheeseInventoryComponent, CheeseSelectionComponent, RootComponent } from '.';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
	path: '',
	component: HomeComponent,
	children: [{
		path: 'cheese-selection',
		component: CheeseSelectionComponent
	},{
		path: 'cheese-inventory',
		component: CheeseInventoryComponent
	}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
