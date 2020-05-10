import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  ToppingchartData = [
    { data: [100], label: 'Peperonni' },
    { data: [72], label: 'Mushroom' },
    { data: [60], label: 'Chicken' },
    { data: [35], label: 'Red Pepper' },
    { data: [17], label: 'Ricotta Cheese' },
  ];
  ToppingColors = [

    {
      backgroundColor: 'blue',
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
  ToppingchartLabels = ["May"]
  ToppingonChartClick(event) {
    console.log(event);
  }

  chartData = [
    { data: [2, 4, 7, 5,3,1,7,6,9,12,7,5], label: 'Order Amount' },

  ];

  chartLabels = ['11', '12', '1', '2','3','4','5','6','7','8','9','10'];

  onChartClick(event) {
    console.log(event);
  }
  CustomerchartData = [
    { data: [10,70,20], label: 'Order Amount' },

  ];

  CustomerchartLabels = ['sharjeel','Naibing','Raymond'];

  CustomeronChartClick(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
