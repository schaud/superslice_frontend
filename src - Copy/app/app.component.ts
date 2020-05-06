import { Component,OnInit} from '@angular/core';

  declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
