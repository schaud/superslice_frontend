import {Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {DataService} from "../../services/data.service";
import {pizza} from "../../models/pizza";
import {topping} from "../../models/topping";
import {PizzaCustomizationService} from "../../services/pizza-customization.service";
import {pizzaForm} from "../../models/pizzaform";
import {orderForm} from "../../models/orderform";
import {PizzaRetrieverService} from "../../services/pizza-retriever.service";

@Component({
  selector: 'app-specials-view',
  templateUrl: './specials-view.component.html',
  styleUrls: ['./specials-view.component.css']
})
export class SpecialsViewComponent implements OnInit {
  @ViewChild("pizzaPic") divView: ElementRef;
  sizes: topping;

  names:Array<string> = [];
  prices:Array<number> = [];
  costTotal:number;
  size:string = 'Medium';

  pizza: string;
  image: string;
  pizzaData: any;
  pizzaItem: pizza;
  cost: number;
  defaultCost : number = 10;
  confirmedPizza : pizzaForm = {type: null, cost: null, size: '', toppingNames: [null], quantity : 1};
  // confirmedPizza :
    cartItems : orderForm = {username: localStorage.getItem('user_key'),
    pizzaForms: [{type : null, toppingNames: [null], size: null, cost: null, quantity: 1}],
    note: null };

  constructor(private dataservice : DataService, private pizzaservice : PizzaRetrieverService, private el: ElementRef,private pizzaCustomizer:PizzaCustomizationService) { }


  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza => this.pizza = pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);
    this.dataservice.sharedPizzaObj.subscribe(pizzaData => this.pizzaData = pizzaData);
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    this.ViewPizza();
    this.getSizes();
    this.cost = this.defaultCost;
  }

  async ViewPizza(): Promise<void> {
    this.pizzaItem = await this.pizzaData.then();
    this.pizzaItem.toppings.shift();
    for (let top of this.pizzaItem.toppings) {
      this.cost += top.cost;
    }
    console.log(this.pizzaItem);
    console.log("this is the price of the pizza"+this.cost);

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
    this.names.splice(index,1);
    this.prices.splice(index,1);
    this.addToTotal();
    console.log(this.names)
    }
  }
  ontoppingChange(name:string,price:number, isChecked: boolean) {
    if(isChecked) {


      let index:number = this.names.findIndex(x => x == this.size)

      this.prices.splice(index,1);
      this.prices.push(price);
      this.size=name;
      if(name == "Medium"){
      this.divView.nativeElement.setAttribute("height","275");
      this.divView.nativeElement.setAttribute("width","450");
}else if(name == "Small"){
  this.divView.nativeElement.setAttribute("height","250");
  this.divView.nativeElement.setAttribute("width","300")
      }else if(name == "Large"){
        this.divView.nativeElement.setAttribute("height","300");
        this.divView.nativeElement.setAttribute("width","500");

      }
      this.cost = this.prices[0];
      for (let top of this.pizzaItem.toppings) {
        this.cost += top.cost;

      }
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
//   addToCart(){
//      let pizza:pizzaForm = new pizzaForm("CustomPizza",this.size,this.costTotal,this.names);
//     console.log(pizza)
//     }

//   async getSizes():Promise<topping>{
//     this.sizes = await this.pizzaCustomizer.getSizes();
//     return this.sizes;

//   }

  async getSizes():Promise<topping>{
    this.sizes = await this.pizzaCustomizer.getSizes();
    console.log(this.sizes[0].toppingName)
    return this.sizes;

  }

  // addToTotal(): void {
  //   this.costTotal = 0;
  //   for (let price of this.prices) {
  //     this.costTotal += price
  //
  //   }
  // }

//   ontoppingChange(name: string, price: number, isChecked: boolean): void {

//     if (isChecked) {

//       let index: number = this.names.findIndex(x => x == this.size)

//       this.prices.splice(index, 1);
//       this.prices.push(price);
//       this.size = name;
//       console.log(this.prices)
//       this.cost = this.prices[0];
//       for (let top of this.pizzaItem.toppings) {
//         this.cost += top.cost;
//       }
//       console.log("this is the size " + this.size)
//       this.addToTotal();
//     }
//   }


  addToCart() : void {

    console.log(this.cartItems)
    this.confirmedPizza.type = this.pizza;
    console.log(this.confirmedPizza.type)
    this.confirmedPizza.size = this.size;
    console.log(this.confirmedPizza.size)
    this.confirmedPizza.cost = this.cost;
    this.confirmedPizza.toppingNames = [];
    console.log('Confirmed Pizza');
    console.log(this.confirmedPizza);

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
    }

    console.log('Current Order');
    console.log(this.cartItems)

  }
}



