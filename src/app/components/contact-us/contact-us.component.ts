import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  name:string;
  email:string;
  comment:string;

  constructor(private emailserv : EmailService) { }



  ngOnInit(): void {
  }

  onSubmit() {

    this.emailserv.sendEmail(this.name,this.email,this.comment);
    
  } 

}
