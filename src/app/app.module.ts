import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartupComponent } from './components/startup/startup.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { MenuSpecialComponent } from './components/menu-special/menu-special.component';
import { MenuStapleComponent } from './components/menu-staple/menu-staple.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { HttpClientModule } from '@angular/common/http'; 
=======
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
<<<<<<< HEAD
    HeaderComponent,
    HomeComponent,
    MenuSpecialComponent,
    MenuStapleComponent,
    PizzaComponent,
=======
    HeaderComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
=======
    FormsModule,
>>>>>>> master
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
