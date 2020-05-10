import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient) { }

  getOrdersByTime():Promise<any>{
    const timePromise = this.http.get("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/metrics/time").toPromise();
    return timePromise;
  }
  getBestToppingsNames
  ():Promise<any>{
    const toppingPromise = this.http.get("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/metrics/topping/names").toPromise();
    return toppingPromise;
  }
  getBestToppingsAmounts
  ():Promise<any>{
    const toppingNamePromise = this.http.get("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/metrics/topping/amounts").toPromise();
    return toppingNamePromise;
  }
  getBestCustomerNames():Promise<any>{
    const namePromise = this.http.get("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/metrics/customer/names").toPromise();
    return namePromise;
  }
  getBestCustomerOrders():Promise<any>{
    const namePromise = this.http.get("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/metrics/customer/orders").toPromise();
    return namePromise;
  }
  getEarningTotal():Promise<any>{
    const totalPromise = this.http.get("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/metrics/earnings/total").toPromise();
    return totalPromise;
  }
  getAverageTotal():Promise<any>{
    const avgPromise = this.http.get("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/metrics/earnings/average").toPromise();
    return avgPromise;
  }

}
