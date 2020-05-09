import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { PizzaCustomizationService } from 'src/app/services/pizza-customization.service';
import { topping } from 'src/app/models/topping';
import { ThrowStmt } from '@angular/compiler';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { pizzaForm } from 'src/app/models/pizzaform';


@Component({
  selector: 'app-plain-pizza',
  templateUrl: './plain-pizza.component.html',
  styleUrls: ['./plain-pizza.component.css']
})
export class PlainPizzaComponent implements OnInit {
  @ViewChild("pizzaPic") divView: ElementRef;
  sizes: topping;
  
  names:Array<string> = [];
  prices:Array<number> = [];
  costTotal:number;
  size:string;


  constructor(private pizzaCustomizer:PizzaCustomizationService,private el: ElementRef) { }

  
  ngOnInit(): void {
    this.getSizes();
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
      this.divView.nativeElement.setAttribute("height","300");
      this.divView.nativeElement.setAttribute("width","350");
}else if(name == "Small"){
  this.divView.nativeElement.setAttribute("height","250");
  this.divView.nativeElement.setAttribute("width","300")
      }else if(name == "Large"){
        this.divView.nativeElement.setAttribute("height","350");
        this.divView.nativeElement.setAttribute("width","400");
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

 
}
