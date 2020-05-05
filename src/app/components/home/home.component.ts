import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {pizza} from "../../models/pizza";
import {PizzaRetrieverService} from "../../services/pizza-retriever.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  pizza : string;
  image: string;
  pizzaData: pizza;


  constructor(private dataservice:DataService, private pizzaservice : PizzaRetrieverService) { }


  specials = [
    {name: 'AlfredoPizza', img : '../assets/alfredo.jpg'},
    {name: 'MeatLoversPizza', img : '../assets/meat_lover.jpg'},
    {name: 'HawaiianPizza', img : '../assets/Hawaii.jpg'},
    {name: 'VeggiePizza', img : '../assets/vege_delux.jpg'},
    {name: 'ItalianPizza', img : '../assets/Italian.jpg'},
    {name: 'SupremePizza', img : '../assets/Supreme_pizza.jpg'},
    {name: 'FourCheesePizza', img : '../assets/Four_Cheese.png'},
    {name: 'WhitePizza', img : '../assets/white_pizza.png'},
    {name: 'MediterraneanPizza', img : '../assets/Mediterranean.png'}
    ];






  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza => this.pizza = pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);
    this.dataservice.sharedPizzaObj.subscribe(pizzaData => this.pizzaData = pizzaData);

  }

  newPizza(value){
    this.dataservice.sendPizza(value);
  }

  newImage(value){
    this.dataservice.sendImage(value);
  }

  async newPizzaObj(value){
    await this.dataservice.sendPizzaObj(value);
  }

  async getPizza(): Promise<pizza> {
    this.pizzaData = await this.pizzaservice.pizzaserv(this.pizza);
    console.log(this.pizzaData);
    console.log(this.pizzaData.toppings[1].toppingName)
    return this.pizzaData;
  }

}
