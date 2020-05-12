import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {pizza} from "../../models/pizza";
import {PizzaRetrieverService} from "../../services/pizza-retriever.service";



@Component({
  selector: 'app-menu-staple',
  templateUrl: './menu-staple.component.html',
  styleUrls: ['./menu-staple.component.css']
})
export class MenuStapleComponent implements OnInit {

  pizza : string;
  image : string;
  pizzaData : any;


  constructor(private dataservice:DataService, private pizzaservice : PizzaRetrieverService) { }



  staples = [
    {name: 'PepperoniPizza', img : '../assets/staple_pizza/Pepperpni.png', img2 : '../assets/pepperoni.jpg'},
    {name: 'MushroomPizza', img : '../assets/staple_pizza/mushroom.png', img2 : '../assets/mushroom3.jpg' },
    {name: 'ChickenPizza', img : '../assets/staple_pizza/chicken.png', img2 : '../assets/chicken.jpg'},
    {name: 'AnchoviePizza', img : '../assets/staple_pizza/Anchovies.png', img2 : '../assets/anchovies.jpg'},
    {name: 'SpinachPizza', img : '../assets/staple_pizza/spinach.png', img2 : '../assets/spinach2.jpg'},
    {name: 'BaconPizza', img : '../assets/staple_pizza/bacon.png', img2 : '../assets/bacon.jpg'},
    {name: 'CauliflowerPizza', img : '../assets/staple_pizza/Cauliflower.png', img2 : '../assets/cauliflower.jpg'},
    {name: 'SausagePizza', img : '../assets/staple_pizza/Sausage.png', img2 : '../assets/sausage.jpg'},
    {name: 'EggplantPizza', img : '../assets/staple_pizza/Eggplant.png', img2 : '../assets/eggplant.jpg'}
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


  async getPizza(value): Promise<pizza> {

    this.pizzaData = await this.pizzaservice.pizzaserv(value);
    console.log(this.pizzaData);
    console.log(value);
    return this.pizzaData;
  }
}
