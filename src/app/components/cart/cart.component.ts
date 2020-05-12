import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {pizzaForm} from "../../models/pizzaform";
import {orderForm} from "../../models/orderform";
import  * as $  from 'jquery';
import {DOCUMENT} from "@angular/common";

import {pizza} from "../../models/pizza";
import {topping} from "../../models/topping";
import {CheckoutService} from "../../services/checkout.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity:1}],

     note: '' };
  images =  new Map([
  ['AlfredoPizza','../assets/alfredo.png'],
  ['MeatLoversPizza','../assets/meat-lovers.png'],
  ['HawaiianPizza','../assets/Hawaii.png'],
  ['VeggiePizza','../assets/vege_delux.png'],
  ['ItalianPizza','../assets/Italian.png'],
  ['SupremePizza','../assets/Supreme_pizza.png'],
  ['FourCheesePizza','../assets/Four_Cheese.png'],
  ['WhitePizza','../assets/white_pizza.png'],
  ['MediterraneanPizza','../assets/Mediterranean.png'],
  ['PepperoniPizza','../assets/staple_pizza/Pepperpni.png'],
  ['MushroomPizza','../assets/staple_pizza/mushroom.png'],
  ['ChickenPizza','../assets/staple_pizza/chicken.png'],
  ['AnchoviesPizza','../assets/staple_pizza/Anchovies.png'],
  ['SpinachPizza','../assets/staple_pizza/spinach.png'],
  ['BaconPizza','../assets/staple_pizza/bacon.png'],
  ['CauliflowerPizza','../assets/staple_pizza/Cauliflower.png'],
  ['SausagePizza','../assets/staple_pizza/Sausage.png'],
  ['EggplantPizza','../assets/staple_pizza/Eggplant.png'],
  ['CustomPizza','../assets/byo.png']
]
  );



  cartWithToppings : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity:1}],
    note: "null" };


  totalCost: number;
  quantity: any = [];
  costPerPizza = [];
  pizzaData: any;
  order : any;
  note : string;
//   @ViewChild("shownSec") divView: ElementRef;




  constructor(private dataservice:DataService, private checkoutservice: CheckoutService) { }


  ngOnInit(): void {
    this.dataservice.sharedPizzaObj.subscribe(pizzaData => this.pizzaData = pizzaData);
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    this.dataservice.sharedOrder2Form.subscribe(cartWithToppings => this.cartWithToppings = cartWithToppings);
    // if(this.cartItems.pizzaForms.length <= 1 || this.cartWithToppings.pizzaForms.length<=1)
    // this.divView.nativeElement.setAttribute("style","visibility:visible;");


    if (this.cartItems.pizzaForms.length == 0){
      this.cartIsEmpty();
    }

    if (this.cartItems.pizzaForms == []){
      this.cartIsEmpty();
    }



    console.log('In the Cart:');
    console.log(this.cartItems);
    console.log(this.cartItems.pizzaForms);
    this.populateQuantity();
    this.totalCost = this.calcCost();
    console.log(this.totalCost);
    console.log(this.quantity);
    console.log(this.cartItems.pizzaForms.length);


    console.log('cart with toppings');
    console.log(this.cartWithToppings);

  }


  populateQuantity() {

    for (let i = 0; i < this.cartItems.pizzaForms.length; i++){
      this.quantity.push(this.cartItems.pizzaForms[i].quantity);
      this.costPerPizza.push(this.cartItems.pizzaForms[i].cost)
    }

  }


  calcCost() {

    let total : number = 0;

    for (let pizzas of this.cartItems.pizzaForms){
      total += pizzas.cost * pizzas.quantity;
    }
    return total;

  }


  removeFromCart(index) {
    console.log(index);
    this.totalCost = this.totalCost - this.cartItems.pizzaForms[index].cost * this.quantity[index];
    this.cartItems.pizzaForms.splice(index, 1);
    this.cartWithToppings.pizzaForms.splice(index, 1);
    console.log(this.cartItems);
    if (this.cartItems.pizzaForms.length == 0) {
      this.cartIsEmpty();
    }
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

  cartIsEmpty() {

    let emptyMsg = document.getElementById('empty');
    let cart = document.getElementById('cart-container');

    cart.style.visibility = 'hidden';
    emptyMsg.style.display = 'block';
  }


  async checkout(): Promise<any>{
    if (this.note == null){
      this.note = 'None';
    }
    this.cartItems.note = this.note;


    this.order = await this.checkoutservice.checkout(this.cartItems);
    console.log(this.cartItems);
    console.log('Clearing Cart...')
    this.cartItems = {username: localStorage.getItem('user_key'),
      pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity:1}],
      note: '' };
    this.cartWithToppings = {username: localStorage.getItem('user_key'),
      pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity:1}],
      note: '' };
    this.cartIsEmpty();
    console.log('Cart has been cleared!')

  }

}
