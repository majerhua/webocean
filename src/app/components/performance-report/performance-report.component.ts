import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-report',
  templateUrl: './performance-report.component.html',
  styleUrls: ['./performance-report.component.css']
})
export class PerformanceReportComponent implements OnInit {

  graficaOne = "../../../assets/grafica_one.PNG";
  graficaTwo = "../../../assets/grafica_two.PNG";

  constructor() { }

  ngOnInit(): void {
  }

}
