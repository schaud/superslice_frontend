import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-menu-staple',
  templateUrl: './menu-staple.component.html',
  styleUrls: ['./menu-staple.component.css']
})
export class MenuStapleComponent implements OnInit {

  pizza : string;
  image : string;

  constructor(private dataservice:DataService) { }

  staples = [
    {name: 'Pepperoni Pizza', img : '../assets/staple_pizza/Pepperpni.png'},
    {name: 'Mushroom Pizza', img : '../assets/staple_pizza/mushroom.png'},
    {name: 'Chicken Pizza', img : '../assets/staple_pizza/chicken.png'},
    {name: 'Anchovies Pizza', img : '../assets/staple_pizza/Anchovies.png'},
    {name: 'Spinach Pizza', img : '../assets/staple_pizza/spinach.png'},
    {name: 'Bacon Pizza', img : '../assets/staple_pizza/bacon.png'},
    {name: 'Cauliflower Pizza', img : '../assets/staple_pizza/Cauliflower.png'},
    {name: 'Sausage Pizza', img : '../assets/staple_pizza/Sausage.png'},
    {name: 'Eggplant Pizza', img : '../assets/staple_pizza/Eggplant.png'}
  ];

  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza => this.pizza = pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);
  }

  newPizza(value){
    this.dataservice.sendPizza(value);
  }

  newImage(value){
    this.dataservice.sendImage(value);
  }


}
