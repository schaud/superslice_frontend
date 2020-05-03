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


const routes: Routes = [

  {path: 'pizzaCustomizer',component:PizzaComponent},
  {path: '', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'menu/special', component: MenuSpecialComponent},
  {path: 'menu/staple', component: MenuStapleComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
