import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
