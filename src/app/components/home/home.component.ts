import {Component, OnInit} from '@angular/core';
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
  pizzaData: any;

  constructor(private dataservice:DataService, private pizzaservice : PizzaRetrieverService) { }


  specials = [
    {name: 'AlfredoPizza', img : '../assets/alfredo.png', img2: '../assets/alfredo3.jpg'},
    {name: 'MeatLoversPizza', img : '../assets/meat-lovers.png', img2: '../assets/Meat-lovers-pizza.jpg'},
    {name: 'HawaiianPizza', img : '../assets/Hawaii.png', img2: '../assets/hawaii2.jpg'},
    {name: 'VeggiePizza', img : '../assets/vege_delux.png', img2: '../assets/vege_delux2.jpg'},
    {name: 'ItalianPizza', img : '../assets/Italian.png', img2: '../assets/italian3.jpg'},
    {name: 'SupremePizza', img : '../assets/Supreme_pizza.png', img2: '../assets/supreme2.jpeg'},
    {name: 'FourCheesePizza', img : '../assets/Four_Cheese.png', img2: '../assets/Four_Cheese.jpg'},
    {name: 'WhitePizza', img : '../assets/white_pizza.png', img2: '../assets/whitepizza.jpg'},
    {name: 'MediterraneanPizza', img : '../assets/Mediterranean.png', img2: '../assets/mediterranean.jpg'}
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

   newPizzaObj(value){
     this.dataservice.sendPizzaObj(value);
  }

  pizzaObj : pizza;

  async getPizza(value): Promise<pizza> {

    this.pizzaData = await this.pizzaservice.pizzaserv(value);
    console.log(this.pizzaData);
    console.log(value);
    return this.pizzaData;
  }

}

// viewConsolePizzaDat() : void {
//   this.pizzaData.then(pizza=>console.log(pizza));
// }

// viewConsolePizzaDat() : void {
//   this.pizzaData.then(pizza=>console.log(pizza));
// }

