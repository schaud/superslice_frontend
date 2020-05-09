import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {pizzaForm} from "../../models/pizzaform";
import {orderForm} from "../../models/orderform";
import  * as $  from 'jquery';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity:1}],
    note: null };

  img : string = '../assets/alfredo.png';
  totalCost: number;
  quantity: any = [];
  costPerPizza = [];
  tempPizzas: Array<pizzaForm> = [Object.create(pizzaForm)];
  tempPizza: pizzaForm = Object.create(pizzaForm);




  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    if (this.cartItems.pizzaForms[0].type == null){
      this.cartItems.pizzaForms.shift();
    }
    console.log('In the Cart:');
    console.log(this.cartItems);
    console.log(this.cartItems.pizzaForms)
    this.populateQuantity();
    this.totalCost = this.calcCost();
    console.log(this.totalCost);
    console.log(this.quantity);
    console.log(this.cartItems.pizzaForms.length);
  }


  populateQuantity() {

    for (let i = 0; i < this.cartItems.pizzaForms.length; i++){
      this.quantity.push(1);
      this.costPerPizza.push(this.cartItems.pizzaForms[i].cost)
    }

  }


  calcCost() {

    let total : number = 0;

    for (let pizzas of this.cartItems.pizzaForms){
      total += pizzas.cost;
    }
    return total;

  }

  hideRow(index) {
    console.log(index);
    this.totalCost = this.totalCost - this.cartItems.pizzaForms[index].cost;
    this.cartItems.pizzaForms.splice(index, 1);

  }

  updateQuantity(){

    let tempCost : number = 0;
    for (let i = 0; i < this.cartItems.pizzaForms.length; i++) {
      this.cartItems.pizzaForms[i].quantity = this.quantity[i];
      tempCost += this.costPerPizza[i] * this.quantity[i];
    }
    this.totalCost = tempCost;
    console.log(this.cartItems)
  }



  async checkout(): Promise<any>{

  }




}
