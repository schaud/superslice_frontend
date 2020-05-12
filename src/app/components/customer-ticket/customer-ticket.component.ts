import { Component, OnInit } from '@angular/core';
import { CustomerTicketServiceService } from 'src/app/services/customer-ticket-service.service';
import { ticket } from 'src/app/models/ticket';
import { OrderNumberServiceService } from 'src/app/services/order-number-service.service';

@Component({
  selector: 'app-customer-ticket',
  templateUrl: './customer-ticket.component.html',
  styleUrls: ['./customer-ticket.component.css']
})
export class CustomerTicketComponent implements OnInit {

  constructor(private customerTicketserv: CustomerTicketServiceService ) { }



  username: string = localStorage.getItem('user_key'); // set to the username from sign in ?
  
  ticket_user_url :any;

  ticketID: number ;
  pending_url: any;

  ngOnInit(): void {

    this.ticket_user_url = this.GetTicketByUserName();
    this.username = localStorage.getItem('user_key');
  }

  async GetTicketByUserName():Promise<any>{
    this.ticket_user_url = await this.customerTicketserv.GetUserTicketByUserName(this.username);
    console.log(this.ticket_user_url);
    console.log(this.ticket_user_url.ticketID);
  }

  
 

}
