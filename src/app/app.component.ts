import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlUser = 'usuarios';
  histogramReport = 'reporte-histograma';
  performanceReport = 'reporte-desempenio';
  identifiedSpecies = 'especies-identificadas';
  title = 'oceanapp';
}
