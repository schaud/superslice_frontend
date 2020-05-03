import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaCustomizationService {

  constructor(private http:HttpClient) { }

  getMeatToppings():Promise<any>{
    let meatPromise:Promise<any>  = this.http.get('http://localhost:9000/getMeatToppings').toPromise();
    console.log(meatPromise);
    return meatPromise;
  }
  getSizes():Promise<any>{
    let sizePromise:Promise<any>  = this.http.get('http://localhost:9000/getSizes').toPromise();
    return sizePromise;
  }
  getVeggieToppings():Promise<any>{
    let veggiePromise:Promise<any>  = this.http.get('http://localhost:9000/getVeggieToppings').toPromise();
    return veggiePromise;
  }
}