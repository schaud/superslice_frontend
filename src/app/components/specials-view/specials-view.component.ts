import {Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {DataService} from "../../services/data.service";
import {PizzaRetrieverService} from "../../services/pizza-retriever.service";
import {pizza} from "../../models/pizza";
import { topping } from 'src/app/models/topping';
import { PizzaCustomizationService } from 'src/app/services/pizza-customization.service';
import { pizzaForm } from 'src/app/models/pizzaform';


@Component({
  selector: 'app-specials-view',
  templateUrl: './specials-view.component.html',
  styleUrls: ['./specials-view.component.css']
})
export class SpecialsViewComponent implements OnInit {
  @ViewChild("pizzaPic") divView: ElementRef;
  sizes: topping;
  
  names:Array<string> = [];
  prices:Array<number> = [];
  costTotal:number;
  size:string;

  pizza : string;
  image : string;
  pizzaData: any;
  pizzaItem: pizza;

  constructor(private dataservice : DataService, private pizzaservice : PizzaRetrieverService,private el: ElementRef,private pizzaCustomizer:PizzaCustomizationService) { }


  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza=>this.pizza=pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);
    this.dataservice.sharedPizzaObj.subscribe(pizzaData => this.pizzaData = pizzaData);
    this.ViewPizza();
    this.getSizes();



  }

viewConsolePizzaDat() : void {
  this.pizzaData.then(pizza=>this.pizzaItem);
  console.log(this.pizzaItem)

}

  async ViewPizza() : Promise<void> {
    this.pizzaItem = await this.pizzaData.then();
    this.pizzaItem.toppings.shift();
    console.log(this.pizzaItem);

  }

  addToTotal(){
    this.costTotal=0;
    for(let price of this.prices){
      this.costTotal+=price

    }
    console.log(this.costTotal)
  }

  onChange(name:string,price:number, isChecked: boolean) {  
    if(isChecked) {
      
      this.names.push(name);
      this.prices.push(price);
      console.log(this.prices)
      console.log(this.names)
      this.addToTotal();
    }
    else{
      let index:number = this.names.findIndex(x => x == name)
    this.names.splice(index,1);
    this.prices.splice(index,1);
    this.addToTotal();
    console.log(this.names)
    }
  }
  ontoppingChange(name:string,price:number, isChecked: boolean) {  
    if(isChecked) {
      

      let index:number = this.names.findIndex(x => x == this.size)
      
      this.prices.splice(index,1);
      this.prices.push(price);
      this.size=name;
      if(name == "Medium"){
      this.divView.nativeElement.setAttribute("height","275");
      this.divView.nativeElement.setAttribute("width","450");
}else if(name == "Small"){
  this.divView.nativeElement.setAttribute("height","250");
  this.divView.nativeElement.setAttribute("width","300")
      }else if(name == "Large"){
        this.divView.nativeElement.setAttribute("height","300");
        this.divView.nativeElement.setAttribute("width","500");
      }
      console.log(this.prices)
      console.log(this.names)
      console.log("this is the size "+this.size)
      this.addToTotal();
    }
    else{
      let index:number = this.names.findIndex(x => x == name)
    this.names.splice(index,1);
    this.prices.splice(index,1);
    this.size ="";
    console.log("this is the size "+this.size)
    this.addToTotal();
    console.log(this.names)
    }
  }
  addToCart(){
     let pizza:pizzaForm = new pizzaForm("CustomPizza",this.size,this.costTotal,this.names);
    console.log(pizza)
    }

  async getSizes():Promise<topping>{
    this.sizes = await this.pizzaCustomizer.getSizes();
    return this.sizes;

  }









  // newPizza(){
  //   this.dataservice.sendPizza('');
  // }
  //
  // newImage(){
  //   this.dataservice.sendImage('');
  // }
  //
  // newPizzaObj(){
  //   this.dataservice.sendPizzaObj(null);
  // }
  //
  // async getPizza(): Promise<pizza> {
  //   this.pizzaData = await this.pizzaservice.pizzaserv(this.pizza);
  //   console.log(this.pizzaData);
  //   return this.pizzaData;
  //   }

}
