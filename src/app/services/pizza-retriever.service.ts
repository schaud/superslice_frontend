import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pizza} from "../models/pizza";


@Injectable({
  providedIn: 'root'
})

export class PizzaRetrieverService {

  constructor(private http : HttpClient) { }

  // returns staples and specials based on type passed in parameter
  pizzaserv(type) : Promise<pizza>{
    const pizzapromise : Promise<pizza> = this.http.get<pizza>(`http://localhost:9000/pizza?toppings=${type}`).toPromise();
    return pizzapromise;
  }
}
