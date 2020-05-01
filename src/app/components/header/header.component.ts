import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
 
  showLogin() {
    this.loginmodal = 'shown';

  }
  hideLogin() {
    this.loginmodal = 'notshown';

  }

}
