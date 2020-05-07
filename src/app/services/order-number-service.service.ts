import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderNumberServiceService {



  constructor(private http:HttpClient) { 
  }

 

  GetPendingOrder() : Promise<any>{
    const pendingStatusPromise: Promise<any> = this.http.get(`http://localhost:9000/ticket?status=Pending`).toPromise();
    return pendingStatusPromise;
  }


}
