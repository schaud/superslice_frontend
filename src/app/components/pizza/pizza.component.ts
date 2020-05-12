import { Component, OnInit } from '@angular/core';
import { PizzaCustomizationService } from 'src/app/services/pizza-customization.service';
import { topping } from 'src/app/models/topping';
import { ThrowStmt } from '@angular/compiler';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { pizzaForm } from 'src/app/models/pizzaform';
import {DataService} from "../../services/data.service";
import {orderForm} from "../../models/orderform";


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {

  constructor(private pizzaCustomizer:PizzaCustomizationService, private dataservice:DataService ) {}

  sizes: topping;
  meats: any;
  veggies: any;
  names:Array<string> = ["Medium"];
  prices:Array<number> = [10];
  costTotal:number = 10;
  currentsize:string = 'Medium';
  oldSize:string;
  quantity = 1;

  cartItems : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity:1}],
    note: '' };

  cartWithToppings : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity:1}],
    note: "null" };


  ngOnInit(): void {
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    this.dataservice.sharedOrder2Form.subscribe(cartWithToppings => this.cartWithToppings = cartWithToppings);

    this.getSizes();
    this.getMeats();
    this.getVeggies();

  }
  addToTotal(){
     this.costTotal=0;
    for(let price of this.prices){
      this.costTotal+=price

    }
   
    console.log(this.costTotal)
  }
  onChange(name:string,price:number, isChecked: boolean) {
    if(isChecked) {

      this.names.push(name);
      this.prices.push(price);
      console.log(this.prices)
      console.log(this.names)
      this.addToTotal();
    }
    else{
      let index:number = this.names.findIndex(x => x == name)
      console.log("deleting a "+ name+ " at position "+index)
    this.names.splice(index,1);
    this.prices.splice(index,1);
    this.addToTotal();
    console.log(this.names)
    }
  }
  ontoppingChange(name:string,price:number, isChecked: boolean) {
    console.log("the old size is "+this.oldSize)
    this.oldSize=this.currentsize;
    if(isChecked) {

      let index:number = this.names.findIndex(x => x == this.oldSize)

      

      console.log("deleting a "+ this.oldSize+ " at position "+index)

      this.names.push(name);
      this.names.splice(index,1);
      this.prices.splice(index,1);
      this.prices.push(price);
     
      this.currentsize=name;

      console.log(this.prices)
      console.log(this.names)
      console.log("this is the size "+this.currentsize)
      this.addToTotal();
    }

  }
  addToCart(){
    let index:number = this.names.findIndex(x => x == this.currentsize)
      this.names.splice(index,1);
     let pizza:pizzaForm = new pizzaForm("CustomPizza",this.currentsize,this.costTotal,this.names, this.quantity);
    console.log(pizza)
    this.cartItems.pizzaForms.push(pizza);
    this.cartWithToppings.pizzaForms.push(pizza);
    console.log(this.cartItems);
    }

  async getSizes():Promise<topping>{
    this.sizes = await this.pizzaCustomizer.getSizes();
    return this.sizes;
  }
  async getMeats():Promise<any>{
    this.meats = await this.pizzaCustomizer.getMeatToppings();
    console.log(this.meats)
  }
  async getVeggies():Promise<any>{
    this.veggies = await this.pizzaCustomizer.getVeggieToppings();
  }

}
