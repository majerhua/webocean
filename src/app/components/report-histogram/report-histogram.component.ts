import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-report-histogram',
  templateUrl: './report-histogram.component.html',
  styleUrls: ['./report-histogram.component.css']
})
export class ReportHistogramComponent implements OnInit {

  @ViewChild('chart') chart: ElementRef | undefined;

  constructor() {
  
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    var data = {
      labels: ["Pelicano", "Pejerrey", "Gaviota"],
      datasets: [{
        label: "Cantidad Especies",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [10, 20, 11],
      }]
    };
    
    var options = {
      maintainAspectRatio: false,
      scales: {
        y: {
          stacked: true,
          grid: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    };
    
    var ctx = this.chart?.nativeElement.getContext('2d');
    console.log(this.chart?.nativeElement);
    new Chart(ctx, {
      type: 'bar',
      options: options,
      data: data
    });
}

}
