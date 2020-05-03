import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {LoginService} from "../../services/login.service";
>>>>>>> master

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private login: LoginService) { }

  username: string;
  password: string;
  user: any;
  session: string;
>>>>>>> master

  title = 'SuperSlice';
  loginmodal:string;
  registermodal:string;
  ngOnInit(){
    this.loginmodal = 'notshown'
    this.registermodal = 'notshown'
  }
  showRegister() {
    this.registermodal = 'shown';

  }
  hideRegister() {
    this.registermodal = 'notshown';

  }
<<<<<<< HEAD
 
=======

>>>>>>> master
  showLogin() {
    this.loginmodal = 'shown';

  }
  hideLogin() {
    this.loginmodal = 'notshown';

  }

<<<<<<< HEAD
=======
  async loginUser(): Promise<any> {
    this.session = null;
    this.user = await this.login.loginserv(this.username, this.password);
    console.log(this.user);
    if (this.user != null) {
      localStorage.setItem('user_key', this.username);
      this.session = localStorage.getItem('user_key');
    }
  }
>>>>>>> master
}
