import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Report } from 'src/app/models/report.model';
@Component({
  selector: 'app-identified-species',
  templateUrl: './identified-species.component.html',
  styleUrls: ['./identified-species.component.css']
})
export class IdentifiedSpeciesComponent implements OnInit {

  urlUser = '/usuarios';
  histogramReport = '/reporte-histograma';
  performanceReport = '/linea-tiempo';
  identifiedSpecies = '/especies-identificadas';
  title = 'oceanapp';
  dataReport = new Array<Report>();
  rol = ''
  username = '' 

  constructor(private userService: UserService) { 
    if(localStorage.getItem('login') !== '1') {
      window.location.href ="/login"
    }

    this.rol = String(localStorage.getItem('rol'));
    this.username = String(localStorage.getItem('username'));
  }

  close() {
    localStorage.setItem('login','0');
    window.location.href ="/login"
  }

  ngOnInit(): void {

    this.userService.getIdentifiedSpecies()
    .subscribe(
      (data: Report[]) => {
        console.log("Data => ",data);
          this.dataReport = data
      },
      (error: any) => {
        console.log(error);
      });
  }

}
