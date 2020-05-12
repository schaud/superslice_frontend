import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import {orderForm} from '../../models/orderform';
import {DataService} from '../../services/data.service';
import {StatsService} from '../../services/stats.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private login: LoginService, private signup: SignupService, private _router: Router,private dataservice:DataService,private statServ:StatsService) { }

  names:string[];
  amounts:number[];
  toppingNames:Array<string>=[];
  toppingAmounts:Array<number>=[];
  topnames:string[];
  topamounts:number[];
  username: string;
  password: string;
  user: any;
  session: string;
  cartItems : orderForm = {username: localStorage.getItem('user_key'),

  pizzaForms: [{type : '', toppingNames: [''], size: '', cost: 0, quantity: 1}],

  note: null };
  title = 'SuperSlice';
  loginmodal:string;
  registermodal:string;

  // For Employee
  employeeloginmodal:string;

  showEmployeeLogin(){
    this.employeeloginmodal = 'shown';
  }
  hideEmployeeLogin(){
    this.employeeloginmodal = 'notshown';
  }


  ngOnInit(){
    
    this.employeeloginmodal = 'notshown'
    this.loginmodal = 'notshown'
    this.registermodal = 'notshown'
    this.dataservice.sharedOrderForm.subscribe(cartItems => this.cartItems = cartItems);
    console.log("this is the num of items when it header starts"+this.cartItems.pizzaForms.length);
    
  }
  showRegister() {
    this.registermodal = 'shown';

  }
  hideRegister() {
    this.registermodal = 'notshown';
  }

  showLogin() {
    this.loginmodal = 'shown';

  }
  hideLogin() {
    this.loginmodal = 'notshown';
  }

  async loginUser(): Promise<any> {
    this.session = null;
    this.user = await this.login.loginserv(this.username, this.password);
    console.log(this.user);
    if (this.user != null && this.user.userRole.roleId == 2) {
      localStorage.setItem('user_key', this.username);
      this.session = localStorage.getItem('user_key');

    }
  }

  async EmployeeloginUser(): Promise<any> {
    this.session = null;
    this.user = await this.login.loginserv(this.username, this.password);
    console.log(this.user);
    if (this.user != null && this.user.userRole.roleId == 1) {
      localStorage.setItem('user_key', this.username);
      this.session = localStorage.getItem('user_key');

    }
  }



  async SignUpUser(): Promise<any>{
    this.session = null;
    this.user = await this.signup.SignUpUserserv(this.username, this.password);
    console.log(this.user);
    if (this.user != null) {
      localStorage.setItem('user_key', this.username);
      this.session = localStorage.getItem('user_key');
    }
  }

  goToEmployee():void {
    this._router.navigate(['/employee']);
  }

  logout():void{
    localStorage.removeItem("user_key");
    this.user=null;
    this.session="";
    console.log("signed out" + this.user)
  }
  async getBestToppings():Promise<any>{
    await this.statServ.getBestToppingsNames().then(data=>{this.names=data});
   console.log(this.names)
   localStorage.setItem("topping_names_key_1",this.names[0]);
   localStorage.setItem("topping_names_key_2",this.names[1]);
   localStorage.setItem("topping_names_key_3",this.names[2]);
   localStorage.setItem("topping_names_key_4",this.names[3]);
   localStorage.setItem("topping_names_key_5",this.names[4]);



   for(let name of this.names){
      this.toppingNames.push(name);
    }
    let i = 0;
    for(let topname of this.toppingNames){
      this.topnames[i] = topname;
      i++;
    }
    console.log(this.toppingNames);
   
      return this.names;
     }
     async getBestToppingsAmounts():Promise<any>{
       await this.statServ.getBestToppingsAmounts().then(data=>{this.amounts=data});
      console.log(this.amounts)
      localStorage.setItem("topping_amounts_key_1",this.amounts[0].toString());
      localStorage.setItem("topping_amounts_key_2",this.amounts[1].toString());
      localStorage.setItem("topping_amounts_key_3",this.amounts[2].toString());
      localStorage.setItem("topping_amounts_key_4",this.amounts[3].toString());
      localStorage.setItem("topping_amounts_key_5",this.amounts[4].toString());
   
       for(let amount of this.amounts){
   ;
         this.toppingAmounts.push(amount);
       }
       let i = 0;
       for(let topamount of this.toppingAmounts){
         this.topamounts[i] = topamount;
         i++;
       }
       console.log(this.toppingAmounts);
   
         return this.names;
        }
}
