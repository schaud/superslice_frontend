import {pizza} from "./pizza";
import {user} from "./user";


export class ticket{

  note : string;
  pizzas : Array<pizza>;
  placementTime : string;
  status : string;
  ticketId : number;
  user : user;

  constructor(note:string, pizzas:Array<pizza>,
              placementTime : string, status: string, ticketId:number, user:user) {

    note = this.note;
    pizzas = this.pizzas;
    placementTime = this.placementTime;
    status = this.status;
    ticketId = this.ticketId;
    user = this.user;


  }
}



