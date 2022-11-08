import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-porcino-list',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class KnowledgeListComponent implements OnInit {
  users?: User[];
  urlUser = '/usuarios';
  histogramReport = '/reporte-histograma';
  performanceReport = '/linea-tiempo';
  identifiedSpecies = '/especies-identificadas';
  title = 'oceanapp';
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
    setTimeout(() =>this.getUserAll(),1000)
    this.userService.test()
    .subscribe(
      (data: any[]) => {
        console.log("Data => ",data);
      },
      (error: any) => {
        console.log(error);
      });
  }

  public redirectRegister(){
    window.location.href = "/usuario/agregar"
  }

  getUserAll(): void {
    this.userService.getAll()
      .subscribe(
        (data: User[] | undefined) => {
          console.log("Data => ",data);
          this.users = data;
        },
        (error: any) => {
          console.log(error);
        });
  }
}
