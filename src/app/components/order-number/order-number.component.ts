import { Component, OnInit } from '@angular/core';
import { OrderNumberServiceService } from 'src/app/services/order-number-service.service';
import { HttpClient } from '@angular/common/http';
import { StatusUpdateServiceService } from 'src/app/services/status-update-service.service';
import { ticket } from 'src/app/models/ticket';
@Component({
  selector: 'app-order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.css'],
})
export class OrderNumberComponent implements OnInit {
  ticketID: number;
  item1: any;
  note: string;
  url: any;
  toppingNameFromPizza1_1: any;
  toppingNameFromPizza1_2: any;
  toppingNameFromPizza2_1: any;
  toppingNameFromPizza2_2: any;

  update_ticket_status_url: any;

  selectStatus: string = 'Pending';
  // This is the ticket
  // t  =[
  //   // {id: 1,  status: 'Pending'},
  //   // { id: 2, status: 'Cooking'},
  //   // { id: 3, status: 'Ready'},
  //   // { id: 4, status: 'Complete'},

  //   {note : ''},
  //   {pizzas : null},
  //   {placementTime : ''},
  //   {status : ''},
  //   {ticketId : 0},
  //   {user : null}
  // ];

  showPendingPizza: boolean = true;
  showIncompletePizza: boolean = false;
  showCompletePizza: boolean = false;

  showPendingOnly(){
    this.update_ticket_status_url = this.UpdateTicketStatus();

    this.showIncompletePizza = false;
    this.showCompletePizza = false; 
  }

  showIncompleteOnly(){
    this.In_completedTickets = this.GetIncompleteOrder();
    this.showPendingPizza = false;
    this.showCompletePizza = false; 
    
  }

  showCompleteOnly(){
    this.CompleteURL = this.GetCompleteOrder();
    this.showPendingPizza = false;
    this.showIncompletePizza = false;
  }


  t: ticket;

  ticketMap = new Map<String, ticket>(); // Status , Ticket

  In_completedTickets: any;

  CompleteURL: any;

  constructor(
    private ons: OrderNumberServiceService,
    private updatestatusserv: StatusUpdateServiceService
  ) {}

  ngOnInit(): void {
    this.url = this.GetPendingOrder();
    // for (let u of this.url) {
    //   let i = 0;
    //   if (u === null) {
    //     this.url.splice(i, 1);
    //   }
    //   if (u.topping.length !== 0) {
    //     console.log(u.pizzas);
    //   }
    //   i++;
    // }
    this.update_ticket_status_url = this.UpdateTicketStatus();
    this.In_completedTickets = this.GetIncompleteOrder();
    this.CompleteURL = this.GetCompleteOrder();
  }

  async GetPendingOrder(): Promise<any> {
    this.url = await this.ons.GetPendingOrder();
  }

  async GetIncompleteOrder(): Promise<any> {
    this.In_completedTickets = await this.ons.GetIncompleteOrder();
  }

  async GetCompleteOrder(): Promise<any> {
    this.CompleteURL = await this.ons.GetCompleteOrder();
  }

  async UpdateTicketStatus(): Promise<any> {
    // console.log("Before");
    this.update_ticket_status_url = await this.updatestatusserv.UpdateStatus(
      this.ticketID,
      this.selectStatus
    );

    // console.log(this.t);

    // console.log("From backend : " +this.t.status);

    // console.log("From Frontend " + this.update_ticket_status_url.status);
  }
  selectedValue: string = '';
  selectedOption: string;
  options = [
    { name: 'Pending', value: 1 },
    { name: 'Ready', value: 2 },
    { name: 'Cooking', value: 3 },
    { name: 'Complete', value: 4 },
  ];

  printOption: string;

  onChangeStatusID(selectValue: string) {
    this.selectStatus = selectValue;
    console.log(selectValue);
  }

  

  


  ChangeStatus(i) {
    console.log('Before ' + this.url[i].ticketId); // 111
    console.log(this.url[i]);
    console.log(this.ticketID);
    console.log(this.t);
    this.t = this.url[i];
    this.t.status = this.selectStatus;

    this.t.note = 'Hi';
    console.log(this.t.note);

    //update
    this.updatestatusserv.UpdateStatus(this.url[i].ticketId, this.selectStatus);
    console.log('After ' + this.url[i].ticketId);
    console.log('After ' + this.t.note);
    // console.log("selected Ticket: ", JSON.stringify(this.t));
    // console.log("selected Ticket: ", JSON.stringify(this.t));
    console.log('selected Ticket: ', JSON.stringify(this.t));
    var tic = JSON.stringify(this.t);
    // console.log("selected value: ", JSON.stringify(this.t.status));
    // console.log(this.t.status);
    if (this.url[i].status !== 'Pending') {
      this.url.splice(i, 1); // remove 1 element
    }
    this.update_ticket_status_url = this.UpdateTicketStatus();
    this.In_completedTickets = this.GetIncompleteOrder();
    this.CompleteURL = this.GetCompleteOrder();
  }

  
  ChangeStatus2(i) {
    console.log('Before ' + this.In_completedTickets[i].ticketId); // 111
    console.log(this.In_completedTickets[i]);
    console.log(this.ticketID);
    console.log(this.t);
    this.t = this.In_completedTickets[i];
    this.t.status = this.selectStatus;

    this.t.note = 'Hi';
    console.log(this.t.note);

    //update
    this.updatestatusserv.UpdateStatus(this.In_completedTickets[i].ticketId, this.selectStatus);
    console.log('After ' + this.In_completedTickets[i].ticketId);
    console.log('After ' + this.t.note);
    // console.log("selected Ticket: ", JSON.stringify(this.t));
    // console.log("selected Ticket: ", JSON.stringify(this.t));
    console.log('selected Ticket: ', JSON.stringify(this.t));
    var tic = JSON.stringify(this.t);
    // console.log("selected value: ", JSON.stringify(this.t.status));
    // console.log(this.t.status);
    if (this.t.status === 'Complete') {
      console.log("this if statement executed in changestatus2 getting rid of order with status  " + this.In_completedTickets[i].status );
      this.In_completedTickets.splice(i, 1); // remove 1 element
    }

    this.update_ticket_status_url = this.UpdateTicketStatus();
    this.In_completedTickets = this.GetIncompleteOrder();
    this.CompleteURL = this.GetCompleteOrder();
    this.showIncompleteOnly();
  }

  ChangeStatus3(i) {
    console.log('Before ' + this.CompleteURL[i].ticketId); // 111
    console.log(this.CompleteURL[i]);
    console.log(this.ticketID);
    console.log(this.t);
    this.t = this.CompleteURL[i];
    this.t.status = this.selectStatus;

    this.t.note = 'Hi';
    console.log(this.t.note);

    //update
    this.updatestatusserv.UpdateStatus(this.CompleteURL[i].ticketId, this.selectStatus);
    console.log('After ' + this.CompleteURL[i].ticketId);
    console.log('After ' + this.t.note);
    // console.log("selected Ticket: ", JSON.stringify(this.t));
    // console.log("selected Ticket: ", JSON.stringify(this.t));
    console.log('selected Ticket: ', JSON.stringify(this.t));
    var tic = JSON.stringify(this.t);
    // console.log("selected value: ", JSON.stringify(this.t.status));
    // console.log(this.t.status);
    if (this.t.status !== 'Complete') {
      console.log("this if statement executed in changestatus3")

      this.CompleteURL.splice(i, 1); // remove 1 element
    }
    this.update_ticket_status_url = this.UpdateTicketStatus();
    this.In_completedTickets = this.GetIncompleteOrder();
    this.CompleteURL = this.GetCompleteOrder();
    this.showCompleteOnly();
  }


}
