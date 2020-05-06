import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {PizzaRetrieverService} from "../../services/pizza-retriever.service";
import {pizza} from "../../models/pizza";

@Component({
  selector: 'app-specials-view',
  templateUrl: './specials-view.component.html',
  styleUrls: ['./specials-view.component.css']
})
export class SpecialsViewComponent implements OnInit {


  pizza: string;
  image: string;
  pizzaData: any;
  pizzaItem: pizza;
  cost : number;



  constructor(private dataservice: DataService, private pizzaservice: PizzaRetrieverService) {
  }


  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza => this.pizza = pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);
    this.dataservice.sharedPizzaObj.subscribe(pizzaData => this.pizzaData = pizzaData);
    this.ViewPizza();



  }



  async ViewPizza(): Promise<void> {
    this.pizzaItem = await this.pizzaData.then();
    this.pizzaItem.toppings.shift();
    this.cost = this.pizzaItem.cost;
    for (let top of this.pizzaItem.toppings){
      this.cost += top.cost;
    }
    console.log(this.pizzaItem);

  }
}







  // newPizza(){
  //   this.dataservice.sendPizza('');
  // }
  //
  // newImage(){
  //   this.dataservice.sendImage('');
  // }
  //
  // newPizzaObj(){
  //   this.dataservice.sendPizzaObj(null);
  // }
  //
  // async getPizza(): Promise<pizza> {
  //   this.pizzaData = await this.pizzaservice.pizzaserv(this.pizza);
  //   console.log(this.pizzaData);
  //   return this.pizzaData;
  //   }


