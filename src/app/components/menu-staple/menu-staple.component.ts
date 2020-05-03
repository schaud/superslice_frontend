import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-staple',
  templateUrl: './menu-staple.component.html',
  styleUrls: ['./menu-staple.component.css']
})
export class MenuStapleComponent implements OnInit {

  meat_url = `http://localhost:9000/getMeatToppings`;
  meat = [];

  veg_url = `http://localhost:9000/getVeggieToppings`;
  veg = [];

  constructor(private http: HttpClient) 
  {
      this.http.get(this.meat_url).toPromise().then(data =>{
        
        console.log("hello " + data[0].toppingName); 

        for(let key in data)
          if(data.hasOwnProperty(key)){
            this.meat.push(data[key].toppingName);
          }


      })
      this.http.get(this.veg_url).toPromise().then(data =>{
        
        console.log("hello veg" + data[0].toppingName); //sausage

        for(let key in data)
          if(data.hasOwnProperty(key)){
            this.veg.push(data[key].toppingName);
          }


      })

   }


  ngOnInit(): void {

  }




}
