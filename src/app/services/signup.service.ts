import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private http: HttpClient) {


  }
  url = "http://localhost:9000/register";
  body:Observable<any>;


  SignUpUserserv(username, password) :Promise<any> {

    const signUpPromise =
    this.http.post(this.url, {username,password}).toPromise(); 
    return signUpPromise;
  }



}
