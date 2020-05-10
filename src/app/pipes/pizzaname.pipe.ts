import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pizzaname'
})
export class PizzanamePipe implements PipeTransform {

  transform(pizzaname:string): string {

    //a method to take in a phone number and return it with the dashes
    // 5555555555 555-555-5555
    const meat:any = pizzaname.toString().split("Lovers").join(" Lovers ");
    const cheese:any = pizzaname.toString().split("Cheese").join(" Cheese ");
    const base:any = pizzaname.toString().split("Pizza").join(" ");

   if(pizzaname.includes("Lovers")){
    return `${meat}`;
   }else if(pizzaname.includes("Cheese")){
    return `${cheese }`;
   }
    return `${base+ " "+ "Pizza"}`

}
  }


