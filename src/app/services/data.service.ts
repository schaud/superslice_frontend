import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import {pizza} from "../models/pizza";
import {pizzaForm} from "../models/pizzaform";
import {orderForm} from "../models/orderform";


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

  private cartObj = new BehaviorSubject<orderForm>(
    {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : null, toppingNames: [null], size: null, cost: null, quantity:1}],
    note: null }
    );
  sharedOrderForm = this.cartObj.asObservable();

  cartItems : orderForm;




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


  sendOrderForm(cartObj : orderForm ){
    this.cartObj.next(cartObj)
  }


}
