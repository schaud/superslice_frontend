import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderNumberServiceService {



  constructor(private http:HttpClient) {
  }



  GetPendingOrder() : Promise<any>{
    const pendingStatusPromise: Promise<any> = this.http.get(`http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/ticket?status=Pending`).toPromise();
    return pendingStatusPromise;
  }

  GetIncompleteOrder() : Promise<any>{
    const IncompleteStatusPromise: Promise<any> = this.http.get(`http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/ticket?status=Incomplete`).toPromise();

    return IncompleteStatusPromise;
  }

  
  GetCompleteOrder() : Promise<any>{
    const IncompleteStatusPromise: Promise<any> = this.http.get(`http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/ticket?status=Complete`).toPromise();

    return IncompleteStatusPromise;
  }




}
