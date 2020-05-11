import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor(private http:  Http) {

  }

  async sendEmail(username,emailAddress,comments) :Promise<any>{
    let promise = this.http.post("http://ec2-3-135-228-219.us-east-2.compute.amazonaws.com:9000/sendEmail",{username,emailAddress,comments}).toPromise();
    return promise;
  }
  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }

}
