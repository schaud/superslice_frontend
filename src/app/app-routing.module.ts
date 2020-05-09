import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MenuSpecialComponent } from './components/menu-special/menu-special.component';
import { MenuStapleComponent } from './components/menu-staple/menu-staple.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import {SpecialsViewComponent} from "./components/specials-view/specials-view.component";
import { CartComponent } from './components/cart/cart.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PlainPizzaComponent } from './components/plain-pizza/plain-pizza.component';
import {StatisticsComponent} from './components/statistics/statistics.component';

const routes: Routes = [

  {path: 'employee', component: EmployeeViewComponent},
  {path: 'cart', component: CartComponent},
  {path: 'pizzaCustomizer',component:PizzaComponent},
  {path: '', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  //{path: 'login', component: LoginComponent},
  //{path: 'register', component: SignupComponent},
  // {path: 'menu/plain', component: PlainPizzaComponent},
  {path: 'menu/special', component: MenuSpecialComponent},
  {path: 'menu/staple', component: MenuStapleComponent},
  {path: 'menu/plain/specials-view', component: PlainPizzaComponent},
  {path: 'menu/special/specials-view', component: SpecialsViewComponent},
  {path: 'menu/staple/specials-view', component: SpecialsViewComponent},
  {path: 'stats', component: StatisticsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
