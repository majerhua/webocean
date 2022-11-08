import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from 'src/app/services/user.service';
import { Report } from 'src/app/models/report.model';

Chart.register(...registerables);
@Component({
  selector: 'app-report-histogram',
  templateUrl: './report-histogram.component.html',
  styleUrls: ['./report-histogram.component.css']
})
export class ReportHistogramComponent implements OnInit {

  urlUser = '/usuarios';
  histogramReport = '/reporte-histograma';
  performanceReport = '/linea-tiempo';
  identifiedSpecies = '/especies-identificadas';
  title = 'oceanapp';

  @ViewChild('chart') chart: ElementRef | undefined;
  fechaInicio = '';
  fechaFin = '';
  dataReport = new Array();
  chartRender:any = null;

  rol = ''
  username = '' 

  constructor(private userService: UserService) {
    if(localStorage.getItem('login') !== '1') {
      window.location.href ="/login"
    }

    this.rol = String(localStorage.getItem('rol'));
    this.username = String(localStorage.getItem('username'));
  }

  ngOnInit() {

  }

  close() {
    localStorage.setItem('login','0');
    window.location.href ="/login"
  }

  getReport(){

    this.fechaInicio = (document.querySelector("#fechaInicio") as HTMLInputElement).value;
    this.fechaFin = (document.querySelector("#fechaFin") as HTMLInputElement).value;

    const report = new Report();
    report.fechaInicio = this.fechaInicio;
    report.fechaFin = this.fechaFin;

    this.userService.getReportHistograma(report)
    .subscribe(
      (data: Report[]) => {
        console.log("Data => ",data);
        if(data.length > 0) {
          this.dataReport = new Array(data[0].lobos_marinos, data[0].pelicanos);
        }else {
          this.dataReport = new Array();
        }
        console.log(this.dataReport);
        this.chartRender?.destroy(); 
        this.renderReport();
      },
      (error: any) => {
        console.log(error);
      });
  }

  ngAfterViewInit() {
    
    this.renderReport();
}

renderReport() {
  var data = {
    labels: ["Lobo marino", "Pelicano"],
    datasets: [{
      label: "Cantidad Especies",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: this.dataReport,
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
  this.chartRender = new Chart(ctx, {
    type: 'bar',
    options: options,
    data: data
  });
}

}
