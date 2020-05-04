import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-specials-view',
  templateUrl: './specials-view.component.html',
  styleUrls: ['./specials-view.component.css']
})
export class SpecialsViewComponent implements OnInit {

  pizza : string;
  image : string;

  constructor(private dataservice : DataService) { }


  ngOnInit(): void {
    this.dataservice.sharedPizza.subscribe(pizza=>this.pizza=pizza);
    this.dataservice.sharedImage.subscribe(image => this.image = image);

  }

  newPizza(){
    this.dataservice.sendPizza('');
  }

  newImage(){
    this.dataservice.sendImage('');
  }



}
