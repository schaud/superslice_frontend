import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {log} from "util";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginserv(username, password) : Promise<any>{
    const loginpromise: Promise<any> = 
    this.http.get(`http://localhost:9000/query/user?username=${username}&password=${password}`).toPromise();
    return loginpromise;
  }

}
