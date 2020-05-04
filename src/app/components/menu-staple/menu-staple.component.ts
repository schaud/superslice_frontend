import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-staple',
  templateUrl: './menu-staple.component.html',
  styleUrls: ['./menu-staple.component.css']
})
export class MenuStapleComponent implements OnInit {

  pizza : string;
  image : string;

  meat_url = `http://localhost:9000/getMeatToppings`;
  meat = [];

  veg_url = `http://localhost:9000/getVeggieToppings`;
  veg = [];

  constructor(private dataservice:DataService) { 
    
          this.http.get(this.meat_url).toPromise().then(data =>{      
        console.log("hello " + data[0].toppingName); 
        for(let key in data)
          if(data.hasOwnProperty(key)){
            this.meat.push(data[key].toppingName);
          }


      })
      this.http.get(this.veg_url).toPromise().then(data =>{
       console.log("hello veg" + data[0].toppingName); //sausage
        for(let key in data)
          if(data.hasOwnProperty(key)){
            this.veg.push(data[key].toppingName);
          }
      })
  }

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
