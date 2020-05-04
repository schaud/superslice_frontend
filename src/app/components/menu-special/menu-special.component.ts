import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu-special',
  templateUrl: './menu-special.component.html',
  styleUrls: ['./menu-special.component.css']
})
export class MenuSpecialComponent implements OnInit {

  constructor() { }


  specials = {
    AlfredoPizza: 'Alfredo Pizza',
    MeatLoversPizza: 'Meat Lovers Pizza',
    HawaiianPizza: 'Hawaiian Pizza',
    MediterraneanPizza: 'Mediterranean Pizza',
    VeggiePizza: 'Veggie Pizza',
    ItalianPizza: 'ItalianPizza',
    SupremePizza: 'SupremePizza',
    FourCheesePizza: 'Four Cheese Pizza',
    WhitePizza: 'White Pizza'
  };



  ngOnInit(): void {
  }

}
