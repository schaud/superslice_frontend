import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './components/aboutUs/about-us/about-us.component';
import { PizzaComponent } from './components/pizza/pizza.component';

const routes: Routes = [
  {path:"aboutUs",component:AboutUsComponent},
  {path:"pizzaCustomizer",component:PizzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
