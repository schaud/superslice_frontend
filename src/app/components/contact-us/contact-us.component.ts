import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private emailserv : EmailService) { }


  ngOnInit(): void {
  }

  onSubmit(name, email, comment) {
    this.emailserv.sendEmail({
      from: 'hello@gmail.com',
      to: email,
      name: name,
      text: comment,
    })
    .subscribe(
      () => {},
      err => console.log(err)
    );
  } 

}
