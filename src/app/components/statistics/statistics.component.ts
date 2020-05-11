import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {StatsService} from 'src/app/services/stats.service';
import { ThrowStmt, ConditionalExpr } from '@angular/compiler';
import { promise } from 'protractor';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  topToppings:Map<String,Number>;
  timedata:Array<number>=[];
  custNamedata:Array<string>=[];
  custOrderdata:Array<number>=[];
  toppingNames:Array<string>=[];
  toppingAmounts:Array<number>=[];
  topnames:Array<string>=["Chicken","Brocolli","Pepporoni","Onions","Tomatoes"];
  topamounts:Array<number>=[1,2,3,4,5];
  totalRevenue:number;
  avgTotal:number;

  chartOptions = {
    responsive: true
  };
  keys:Array<String>;
  bestToppings:Map<Array<number>,string>;
  times:Array<number>;
  customerNames:Array<string>;
  customerOrders:Array<number>;
  names:Array<string>;
  amounts:Array<number>;
  timeprom:Promise<Array<number>>;
  ToppingchartData = [
    { data: [this.topamounts[0]], label: this.topnames[0]},
    { data: [this.topamounts[1]], label: this.topnames[1]},
    { data: [this.topamounts[2]], label:this.topnames[2] },
    { data: [this.topamounts[3]], label: this.topnames[3] },
    { data: [this.topamounts[4]], label: this.topnames[4] },
  ];
  ToppingColors = [

    {
      backgroundColor: 'pink',
      borderColor: 'pink',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    {
      backgroundColor: 'maroon',
      borderColor: 'pink',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    }
    // ...colors for additional data sets
  ];

  custColors = [

    {
      backgroundColor: '',
      borderColor: 'blue',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: 'red',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },

    // ...colors for additional data sets
  ];
  ToppingchartLabels = ["Toppings"]
  ToppingonChartClick(event) {
    console.log(event);
  }

  chartData = [
    { data: this.timedata, label: 'Order Amount' },

  ];

  chartLabels=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

  onChartClick(event) {
    console.log(event);
  }
  CustomerchartData = [
    { data: this.custOrderdata, label: 'Order Amount' },

  ];

  CustomerchartLabels = this.custNamedata;

  CustomeronChartClick(event) {
    console.log(event);
  }

  constructor(private statServ:StatsService) {
 
   }

  ngOnInit(): void {
    this.getTimes();
    this.getBestToppings();
    this.getBestToppingsAmounts();
    this.getCustomerNames();
    this.getCustomerOrders();
    this.getTotalRevenue();
    this.getAverageTotal();
    console.log(this.timedata);
    console.log(this.toppingNames)

    console.log(this.topnames)
 
  }


  async getBestToppings():Promise<any>{
 await this.statServ.getBestToppingsNames().then(data=>{this.names=data});
console.log(this.names)
 for(let name of this.names){
   this.toppingNames.push(name);
 }
 let i = 0;
 for(let topname of this.toppingNames){
   this.topnames[i] = topname;
   i++;
 }
 console.log(this.toppingNames);

   return this.names;
  }
  async getBestToppingsAmounts():Promise<any>{
    await this.statServ.getBestToppingsAmounts().then(data=>{this.amounts=data});
   console.log(this.amounts)
    for(let amount of this.amounts){
;
      this.toppingAmounts.push(amount);
    }
    let i = 0;
    for(let topamount of this.toppingAmounts){
      this.topamounts[i] = topamount;
      i++;
    }
    console.log(this.toppingAmounts);

      return this.names;
     }
  async getTimes():Promise<any>{
    await this.statServ.getOrdersByTime().then(data=>{this.times=data});
    for(let time of this.times){
      this.timedata.push(time);
 
    }
    console.log(this.timedata)
    return this.times;
   }
   async getCustomerNames():Promise<any>{
    await this.statServ.getBestCustomerNames().then(data=>{this.customerNames=data});
    
    for(let name of this.customerNames){
      this.custNamedata.push(name);
 
    }

    console.log(this.custNamedata)
    return this.customerNames;
   }
   async getCustomerOrders():Promise<any>{
    await this.statServ.getBestCustomerOrders().then(data=>{this.customerOrders=data});
    let totOrderAmount = 0;
    for(let order of this.customerOrders){
      this.custOrderdata.push(order);
      totOrderAmount+=order;
    }
    console.log("these are the nums" + this.customerOrders)
    let i = 0;
    for(let num of this.custOrderdata){
      this.custOrderdata[i] =Math.round((num/totOrderAmount)*100);
      console.log("this is the percentage"+this.custOrderdata[i]);
   i++;
    }
    this.custOrderdata[0]=this.custOrderdata[0] + 1;
    console.log(this.custOrderdata)
    return this.customerOrders;
   }
   async getTotalRevenue():Promise<any>{
     await this.statServ.getEarningTotal().then(data=>{this.totalRevenue=data});
    return this.totalRevenue;
    }
    async getAverageTotal():Promise<any>{
      await this.statServ.getAverageTotal().then(data=>{this.avgTotal=data});
     return this.avgTotal;
     }
}
