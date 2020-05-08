import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor(private http:  Http) { }
  sendEmail(argparam) {
    // return this.http.post('httpspakainfo.com/email/', argparam)
    // .map(res => res.json())
    // .catch(this._errorHandler);
    return this.http.get("http://localhost:9000/",argparam).pipe(map(res =>{res.json()}));
  }
  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }
  // res.header('Access-Control-Allow-Origin', "*");
  // res.header('Access-Control-Allow-Methods', 'POST');
  // res.header("Access-Control-Allow-Headers", "accept, content-type");
  // res.header("Access-Control-Max-Age", "1728000");
}
