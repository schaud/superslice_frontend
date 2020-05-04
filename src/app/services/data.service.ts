import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import {pizza} from "../models/pizza";


@Injectable({
  providedIn: 'root'
})
export class DataService {


  private pizza = new BehaviorSubject('');
  sharedPizza = this.pizza.asObservable();

  private image = new BehaviorSubject('');
  sharedImage = this.image.asObservable();

  private pizzaObj = new BehaviorSubject<pizza>(null);
  sharedPizzaObj = this.pizzaObj.asObservable();



  constructor() { }

  sendPizza(pizza : string){
    this.pizza.next(pizza)
  }

  sendImage(image : string){
    this.image.next(image)
  }

  sendPizzaObj(pizzaObj : pizza){
    this.pizzaObj.next(pizzaObj)
  }

}
