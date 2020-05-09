import { Component, OnInit } from '@angular/core';
import { OrderNumberServiceService } from 'src/app/services/order-number-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.css']
})
export class OrderNumberComponent implements OnInit {

  ticketID: number ;
  item1 : any ;
  note: string;
  url: any;
  toppingNameFromPizza1_1 : any;
  toppingNameFromPizza1_2 : any;
  toppingNameFromPizza2_1:any;
  toppingNameFromPizza2_2:any;

  // counter: number = 0;;

  // increment(){
  //   this.counter +=1;
  // }
  

  constructor(private ons: OrderNumberServiceService) { }

  ngOnInit(): void {
    // this.ticketID = this.GetPendingOrder()[this.counter].ticketId;
    this.url = this.GetPendingOrder();

  }

  async GetPendingOrder(): Promise<any>{
    this.url =  await this.ons.GetPendingOrder();
    console.log("myurl " + this.url);
    console.log(this.url);
    // this.ticketID = this.url[this.counter].ticketId;
    console.log(this.ticketID);
    // this.note =  this.url[0].note;
    // // From First Pizza
    // this.toppingNameFromPizza1_1 =  this.url[0].pizzas[0].toppings[0].toppingName;
    // this.toppingNameFromPizza1_2 =  this.url[0].pizzas[0].toppings[1].toppingName;
    console.log(this.url[0].pizzas[0].toppings[0].toppingName);
    console.log(this.url[0].pizzas[0].toppings[1].toppingName);
    console.log(this.url[0].pizzas[0].toppings[2].toppingName);
    // // From Second Pizza
    // this.toppingNameFromPizza2_1 = this.url[0].pizzas[1].toppings[0].toppingName;
    // this.toppingNameFromPizza2_2 = this.url[0].pizzas[1].toppings[1].toppingName;
    
  }


}
