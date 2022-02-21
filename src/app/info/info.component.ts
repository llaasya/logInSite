import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
    constructor() {
        
    }
  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: [
          'Manufacturing',
          'Real Estate,Rental & Leasing',
          'Retail and Wholesale',
          'Agriculture',
          'Transportation,Utilities & Other',
          'Construction',
          'Service'
        ],
        datasets: [{
          label: 'Domains',
          data: [9, 5, 26, 21, 3, 12, 24, 9],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(51,204,204)',
            'rgb(204,255,204)',
            'rgb(153,51,102)',
            'rgb(255,128,128)'

          ]
        }]
      }});

}
}
