import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartupComponent } from './components/startup/startup.component';
import { AboutUsComponent } from './components/aboutUs/about-us/about-us.component';
import { ContactUsComponent } from './components/contactUs/contact-us/contact-us.component';
import { PizzaComponent } from './components/pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    AboutUsComponent,
    ContactUsComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
