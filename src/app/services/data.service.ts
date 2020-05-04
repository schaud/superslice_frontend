import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pizza = new BehaviorSubject('');
  sharedPizza = this.pizza.asObservable();

  private image = new BehaviorSubject('');
  sharedImage = this.image.asObservable();

  constructor() { }

  sendPizza(pizza : string){
    this.pizza.next(pizza)
  }

  sendImage(image : string){
    this.image.next(image)
  }

}
