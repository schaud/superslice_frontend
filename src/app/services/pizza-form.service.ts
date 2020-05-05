import { Injectable } from '@angular/core';
import { pizzaForm } from '../models/pizzaform';
@Injectable({
  providedIn: 'root'
})
export class PizzaFormService {

  constructor() { }
  pizzaformArray:Array<pizzaForm>;
}
