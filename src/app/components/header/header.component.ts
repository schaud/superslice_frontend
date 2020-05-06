import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private login: LoginService) { }

  username: string;
  password: string;
  user: any;
  session: string;

  title = 'SuperSlice';
  loginmodal:string;
  registermodal:string;
  ngOnInit(){
    this.loginmodal = 'notshown'
    this.registermodal = 'notshown'
    this.session = localStorage.getItem('user_key');

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
    this.user = await this.login.loginserv(this.username, this.password);
    console.log(this.user);
    if (this.user != null) {
      localStorage.setItem('user_key', this.username);
      this.session = localStorage.getItem('user_key');
    }
  }
}
