import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from 'src/app/services/user.service';
import { Report } from 'src/app/models/report.model';

Chart.register(...registerables);
@Component({
  selector: 'app-performance-report',
  templateUrl: './performance-report.component.html',
  styleUrls: ['./performance-report.component.css']
})
export class PerformanceReportComponent implements OnInit {

  urlUser = '/usuarios';
  histogramReport = '/reporte-histograma';
  performanceReport = '/linea-tiempo';
  identifiedSpecies = '/especies-identificadas';
  title = 'oceanapp';

  @ViewChild('chart') chart: ElementRef | undefined;
  fechaInicio = '';
  fechaFin = '';
  pelicanos = new Array();
  lobosMarinos = new Array();
  chartRender:any = null;
  labels = new Array();

  rol = ''
  username = '' 

  constructor(private userService: UserService) {
    if(localStorage.getItem('login') !== '1') {
      window.location.href ="/login"
    }
    this.rol = String(localStorage.getItem('rol'));
    this.username = String(localStorage.getItem('username'));
   }

  ngOnInit(): void {
  }

  close() {
    localStorage.setItem('login','0');
    window.location.href ="/login"
  }

  ngAfterViewInit() {
    
    this.getReport();
  }



getReport(){


  this.userService.getReportLineTime()
  .subscribe(
    (data: Report[]) => {
      console.log("Data => ",data);
      if(data.length > 0) {
        for(let i=0; i<data.length; i++) {
          this.pelicanos.push(data[i].pelicanos);
          this.lobosMarinos.push(data[i].lobos_marinos);
          this.labels.push(data[i].fechaLance);
        }
      }
      this.renderReport();
    },
    (error: any) => {
      console.log(error);
    });
}

renderReport() {
  var data = {
    labels: this.labels,
    datasets: [{
      label: 'Pelicanos',
      data: this.pelicanos,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Lobos marinos',
      data: this.lobosMarinos,
      fill: false,
      borderColor: 'rgb(255, 22, 100)',
      tension: 0.1
    }]
  };
  
  
  var ctx = this.chart?.nativeElement.getContext('2d');
  this.chartRender = new Chart(ctx, {
    type: 'line',
    data: data
  });
}

}
