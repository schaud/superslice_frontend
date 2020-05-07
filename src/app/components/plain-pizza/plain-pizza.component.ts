import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plain-pizza',
  templateUrl: './plain-pizza.component.html',
  styleUrls: ['./plain-pizza.component.css']
})
export class PlainPizzaComponent implements OnInit {
  constructor() { }

  pizza = {
   plainPizza: 'Alfredo Pizza',
  
  };
  ngOnInit(): void {

  }

 
}
