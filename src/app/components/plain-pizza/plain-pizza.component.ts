import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { PizzaCustomizationService } from 'src/app/services/pizza-customization.service';
import { topping } from 'src/app/models/topping';
import { ThrowStmt } from '@angular/compiler';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { pizzaForm } from 'src/app/models/pizzaform';
import {orderForm} from "../../models/orderform";
import {pizza} from "../../models/pizza";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-plain-pizza',
  templateUrl: './plain-pizza.component.html',
  styleUrls: ['./plain-pizza.component.css']
})
export class PlainPizzaComponent implements OnInit {
  @ViewChild("pizzaPic") divView: ElementRef;
  sizes: topping;

  pizza: string;
  names:Array<string> = [];
  prices:Array<number> = [];
  costTotal:number;
  size:string;
  cost: number;
  defaultCost : number = 10;
  toppings : Array<string> = ['Nice and Cheesy']
  confirmedPizza : pizzaForm = {type: null, cost: null, size: '', toppingNames: [null], quantity : 1};
  confirmedPizzaWToppings:  pizzaForm = {type: null, cost: null, size: '', toppingNames: [null], quantity : 1};
  cartItems : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : null, toppingNames: [null], size: null, cost: null, quantity: 1}],
    note: null };
  cartWithToppings: orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : null, toppingNames: [null], size: null, cost: null, quantity: 1}],
    note: null };


  constructor(private dataservice : DataService,private pizzaCustomizer:PizzaCustomizationService,private el: ElementRef) { }


  ngOnInit(): void {
    this.getSizes();
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    this.dataservice.sharedOrder2Form.subscribe(cartWithToppings => this.cartWithToppings = cartWithToppings);
    this.cost = this.defaultCost;
  }
  addToTotal(){
    this.costTotal=0;
    for(let price of this.prices){
      this.costTotal+=price

    }
    console.log(this.costTotal)
  }

  // onChange(name:string,cost:number, isChecked: boolean) {
  //   if(isChecked) {
  //
  //     this.names.push(name);
  //     this.prices.push(cost);
  //     console.log(this.prices)
  //     console.log(this.names)
  //     this.addToTotal();
  //   }
  //   else{
  //     let index:number = this.names.findIndex(x => x == name)
  //   this.names.splice(index,1);
  //   this.prices.splice(index,1);
  //   this.addToTotal();
  //   console.log(this.names)
  //   }
  // }
  ontoppingChange(name:string,price:number, isChecked: boolean) {
    if(isChecked) {


      let index:number = this.names.findIndex(x => x == this.size)

      this.prices.splice(index,1);
      this.prices.push(price);
      this.size=name;
      if(name == "Medium"){
      this.divView.nativeElement.setAttribute("height","300");
      this.divView.nativeElement.setAttribute("width","350");
}else if(name == "Small"){
  this.divView.nativeElement.setAttribute("height","250");
  this.divView.nativeElement.setAttribute("width","300")
      }else if(name == "Large"){
        this.divView.nativeElement.setAttribute("height","350");
        this.divView.nativeElement.setAttribute("width","400");
      }
      this.cost = this.prices[0];
      console.log(this.prices)
      console.log(this.names)
      console.log("this is the size "+this.size)
      this.addToTotal();
    }
    else{
      let index:number = this.names.findIndex(x => x == name)
    this.names.splice(index,1);
    this.prices.splice(index,1);
    this.size ="";
    console.log("this is the size "+this.size)
    this.addToTotal();
    console.log(this.names)
    }
  }
  // addToCart(){
  //   //  let pizza:pizzaForm = new pizzaForm("CustomPizza",this.size,this.costTotal,this.names);
  //   // console.log(pizza)
  //   }


  async getSizes():Promise<topping>{
    this.sizes = await this.pizzaCustomizer.getSizes();
    return this.sizes;

  }



  addToCart() : void {

    console.log(this.cartItems)
    this.confirmedPizza.type = 'PlainPizza';
    this.confirmedPizzaWToppings.type = 'PlainPizza';
    this.confirmedPizza.size = this.size;
    this.confirmedPizzaWToppings.size = this.size;
    console.log(this.confirmedPizza.size)
    this.confirmedPizza.cost = this.cost;
    this.confirmedPizzaWToppings.cost = this.cost;


    this.confirmedPizza.toppingNames = [];
    this.confirmedPizzaWToppings.toppingNames = this.toppings;
    console.log('Confirmed Pizza');
    console.log(this.confirmedPizza);
    console.log('Confirmed Pizza w t' );
    console.log(this.confirmedPizzaWToppings);

    let exists : boolean  = false;


// redo to compare each specific field from cart items to confirmed pizza
    for (let i = 0; i < this.cartItems.pizzaForms.length; i++){
      if (
        this.confirmedPizza.type === this.cartItems.pizzaForms[i].type &&
        this.confirmedPizza.size === this.cartItems.pizzaForms[i].size
      )
      {
        console.log('Cart size : ' + this.cartItems.pizzaForms[i].size)

        console.log('Confirmed Size : ' + this.confirmedPizza.size)
        exists = true;
        this.cartItems.pizzaForms[i].quantity += 1;
        break;
      }
    }
    if (!exists){
      this.cartItems.pizzaForms.push(this.confirmedPizza);
      this.cartWithToppings.pizzaForms.push(this.confirmedPizzaWToppings);

    }
    console.log('CWOT');
    console.log(this.cartItems)

    console.log('Added Pizza');

    console.log('CWT');

    console.log(this.cartWithToppings)




  }


}
