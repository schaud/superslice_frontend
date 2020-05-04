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

  pizza : string;
  image : string;
  pizzaData: pizza;

  constructor(private dataservice : DataService, private pizzaservice : PizzaRetrieverService) { }


  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza=>this.pizza=pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);
    this.dataservice.sharedPizzaObj.subscribe(pizzaData => this.pizzaData = pizzaData);


  }

  viewConsolePizzaDat() : void {
    console.log(this.pizzaData)
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

}
