import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {orderForm} from "../models/orderform";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:9000/makeOrder";
  body: Observable<any>;


  checkout(order : orderForm) : Promise<any> {

    const checkoutPromise = this.http.post(this.url, order).toPromise();
    return checkoutPromise;

  }
}
