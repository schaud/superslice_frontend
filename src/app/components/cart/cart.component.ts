import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {pizzaForm} from "../../models/pizzaform";
import {orderForm} from "../../models/orderform";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : orderForm = Object.create(orderForm)

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    console.log('In the Cart:');
    console.log(this.cartItems);
  }


}
