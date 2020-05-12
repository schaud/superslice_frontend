import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class StatusUpdateServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:9000/updateTicket/";


  UpdateStatus(t: ticket):Promise<any> {

    const updateTicketObjPromise =
    this.http.put(this.url,{t}).toPromise();

    return updateTicketObjPromise;
  }
}
