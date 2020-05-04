import {ticket} from './ticket'
import {topping} from "./topping";

export class pizza{

  cost: number;
  pizzaId : number;
  ticket: ticket;
  toppings: Array<topping>

  constructor(cost:number, pizzaId:number, ticket:ticket, toppings:Array<topping>) {
    cost = this.cost;
    pizzaId = this.pizzaId;
    ticket = this.ticket;
    toppings = this.toppings;
  }

}
