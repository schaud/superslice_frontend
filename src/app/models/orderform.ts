import {pizzaForm} from "./pizzaform";

export class orderForm{

  username: string;
  note : string;
  pizzaForms : Array<pizzaForm>;




  constructor( username:string, note:string, pizzaForms:Array<pizzaForm>) {

    this.username = username || '';
    this.note = note || '';
    this.pizzaForms = pizzaForms;
  }
}
