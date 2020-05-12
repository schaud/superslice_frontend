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
    this.http.get(`http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/tickets/${username}`).toPromise();

    return thePromise;
   }
}
