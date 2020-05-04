import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  pizza : string;
  image: string;

  constructor(private dataservice:DataService) { }


  specials = [
    {name: 'Alfredo Pizza', img : '../assets/alfredo.jpg'},
    {name: 'Meat Lovers Pizza', img : '../assets/meat_lover.jpg'},
    {name: 'Hawaiian Pizza', img : '../assets/Hawaii.jpg'},
    {name: 'Veggie Pizza', img : '../assets/vege_delux.jpg'},
    {name: 'Italian Pizza', img : '../assets/Italian.jpg'},
    {name: 'Supreme Pizza', img : '../assets/Supreme_pizza.jpg'},
    {name: 'Four Cheese Pizza', img : '../assets/Four_Cheese.png'},
    {name: 'White Pizza', img : '../assets/white_pizza.png'},
    {name: 'Mediterranean Pizza', img : '../assets/Mediterranean.png'}
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
