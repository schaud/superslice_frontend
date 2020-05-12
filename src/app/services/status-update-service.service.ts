import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class StatusUpdateServiceService {

  constructor(private http: HttpClient) { }





  UpdateStatus(t_id:number,status:string):Promise<any> {

    // http://localhost:9000/update?id=57&status=Ready

    //`http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/pizza?toppings=${type}`


    const updateTicketObjPromise =
    this.http.put(`http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/update?id=${t_id}&status=${status}`,{t_id,status}).toPromise();
  // const updateTicketObjPromise =
  //   this.http.put(this.url,JSON.stringify(t)).toPromise();
    
    return updateTicketObjPromise;
  }

  


}
