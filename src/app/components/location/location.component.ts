import { Component, OnInit } from '@angular/core';
import {MapsService} from 'src/app/services/maps.service';
import {AgmCoreModule} from '@agm/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  lat:string = '';
  lng:string='';

  location:object;
  constructor(private map:MapsService) {     this.map.getLocation().subscribe(data=>{
    console.log(data);
    this.lat = data.latitude;
    this.lng = data.longitude;
  })}

  ngOnInit(): void {
  }

}
