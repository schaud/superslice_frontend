import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTicketServiceService {

  constructor(private http:HttpClient) {
   }


   GetUserTicketByUserName(username):Promise<any>{

    const thePromise: Promise<any> =
    this.http.get(`http://localhost:9000/tickets/${username}`).toPromise();

    return thePromise;
   }
}
