import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {pizzaForm} from "../../models/pizzaform";
import {orderForm} from "../../models/orderform";
import  * as $  from 'jquery';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0}],
    note: null };
  img : string = '../assets/alfredo.png';
  totalCost: number;






  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    if (this.cartItems.pizzaForms[0].type == null){
      this.cartItems.pizzaForms.shift();
    }
    console.log('In the Cart:');
    console.log(this.cartItems);
    console.log(this.cartItems.pizzaForms)
    this.totalCost = this.calcCost();
    console.log(this.totalCost);
  }



  calcCost() {

    let total : number = 0;

    for (let pizzas of this.cartItems.pizzaForms){
      total += pizzas.cost;
    }
    return total;

  }

  hideRow(i) {
    console.log(i);
    this.totalCost = this.totalCost - this.cartItems.pizzaForms[i].cost;
    this.cartItems.pizzaForms.splice(i, 1);

  }


  async checkout(): Promise<any>{

  }




}
