import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


interface location{
  latitude:string;
  longitude:string;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http:HttpClient) { }
  
  getLocation(){
    return this.http.get<location>('http://ipapi.co/172.58.228.36/json/')
  }
}
