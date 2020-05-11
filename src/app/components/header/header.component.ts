import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import {orderForm} from '../../models/orderform';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private login: LoginService, private signup: SignupService, private _router: Router,private dataservice:DataService) { }


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


}
