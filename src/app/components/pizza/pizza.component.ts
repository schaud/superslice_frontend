import { Component, OnInit } from '@angular/core';
import { PizzaCustomizationService } from 'src/app/services/pizza-customization.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {
  
  constructor(private pizzaCustomizer:PizzaCustomizationService) {}

  sizes: any;
  meats: any;
  veggies: any;

  ngOnInit(): void {
    this.getSizes();
    this.getMeats();
    this.getVeggies();

  }
  async getSizes():Promise<any>{
    this.sizes = await this.pizzaCustomizer.getSizes();

  }
  async getMeats():Promise<any>{
    this.meats = await this.pizzaCustomizer.getMeatToppings();
    console.log(this.meats)
  }
  async getVeggies():Promise<any>{
    this.veggies = await this.pizzaCustomizer.getVeggieToppings();
  }

}
