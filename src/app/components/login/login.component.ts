import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Response } from 'src/app/models/response.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
    if(localStorage.getItem('login') === '1'){
      window.location.href ="/usuarios";
    }
   }


  ngOnInit(): void {

  }

  login(e:any) {
    e.preventDefault()
    const user = new User();
    user.username = (document.querySelector("#username") as HTMLInputElement).value;
    user.password = (document.querySelector("#password") as HTMLInputElement).value;

    this.userService.login(user)
    .subscribe(
      (data: Response) => {
        console.log("Data => ",data);
        if(data.code == '1') {
          if(data.rol == 'ADMINISTRADOR') {
            window.location.href ="/usuarios";
            localStorage.setItem('login', '1');
            localStorage.setItem('rol', data.rol);
            localStorage.setItem('username', data.username);
          }else if(data.rol == 'BIOLOGO_MARINO') {
            window.location.href ="/reporte-histograma";
            localStorage.setItem('login', '1');
            localStorage.setItem('rol', data.rol);
            localStorage.setItem('username', data.username);
          }else{
            alert("Usted no tiene el ROL de usuario para ingresar");
          }
        }else{
          alert("El usuario no existe");
        }
      },
      (error: any) => {
        console.log(error);
      });
      return false;
  }

}
