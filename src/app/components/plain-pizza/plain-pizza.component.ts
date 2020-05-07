import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {PizzaRetrieverService} from "../../services/pizza-retriever.service";
import {pizza} from "../../models/pizza";


@Component({
  selector: 'app-plain-pizza',
  templateUrl: './plain-pizza.component.html',
  styleUrls: ['./plain-pizza.component.css']
})
export class PlainPizzaComponent implements OnInit {

  pizza : string;
  image : string;
  pizzaData: any;
  pizzaItem: pizza;

  constructor(private dataservice:DataService, private pizzaservice : PizzaRetrieverService) { }

  staples = [
    {name: 'PlainPizza', img : '../assets/staple_pizza/Pepperpni.png'}
  ];
  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza=>this.pizza=pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);
    this.dataservice.sharedPizzaObj.subscribe(pizzaData => this.pizzaData = pizzaData);
    this.ViewPizza();
  }
  newPizza(value){
    this.dataservice.sendPizza(value);
  }

  newImage(value){
    this.dataservice.sendImage(value);
  }

  newPizzaObj(value){
    this.dataservice.sendPizzaObj(value);
  }
  viewConsolePizzaDat() : void {
    this.pizzaData.then(pizza=>this.pizzaItem);
    console.log(this.pizzaItem)
  
  }
  
    async ViewPizza() : Promise<void> {
      this.pizzaItem = await this.pizzaData.then();
      this.pizzaItem.toppings.shift();
      console.log(this.pizzaItem);
  
    }

 
}
