import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
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
import { HomeComponent } from './components/home/home.component';
import { MenuSpecialComponent } from './components/menu-special/menu-special.component';
import { MenuStapleComponent } from './components/menu-staple/menu-staple.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { SpecialsViewComponent } from './components/specials-view/specials-view.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { OrderNumberComponent } from './components/order-number/order-number.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {CommonModule} from '@angular/common';
import {LocationComponent} from './components/location/location.component';
import { PlainPizzaComponent } from './components/plain-pizza/plain-pizza.component';
import { EmailService } from './services/email.service';

// import {MatInputModule} from '@angular/material/input';
import {MapsService} from './services/maps.service'
// import {  ErrorHandler } from '@angular/core';
 import { HttpModule } from '@angular/http';
import { EmployeeHeaderComponent } from './components/employee-header/employee-header.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatSelectModule} from '@angular/material/select';



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
    HeaderComponent,
    HomeComponent,
    MenuSpecialComponent,
    MenuStapleComponent,
    PizzaComponent,
    SpecialsViewComponent,
    CartComponent,
    OrderComponent,
    PlaceOrderComponent,
    PlainPizzaComponent,
    EmployeeViewComponent,
    OrderNumberComponent,

    StatisticsComponent,
    LocationComponent,
    EmployeeHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC2MHBjkpGK0Nj-ec79KS0Ht3imzUrulPw'
    }),
    // MatInputModule,
     HttpModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatInputModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [
    EmailService,
    MapsService,



  ],

    ChartsModule


  ],
  bootstrap: [AppComponent],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
