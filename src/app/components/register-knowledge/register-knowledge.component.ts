import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from 'src/app/models/user.model'

@Component({
  selector: 'app-register-knowledge',
  templateUrl: './register-knowledge.component.html',
  styleUrls: ['./register-knowledge.component.css']
})
export class RegisterKnowledgeComponent implements OnInit {


  public username:string = "";
  public dni: string = "";
  public nombre:string = "";
  public apellidos:string = "";
  public password:string = "";
  public tipoUsuario:string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public redirectHome(){
    window.location.href ="/user"
  }

  public register(e:any){
    console.log(e);
    e.preventDefault()
    this.username = (document.querySelector("#username") as HTMLInputElement).value;
    this.dni = (document.querySelector("#dni") as HTMLInputElement).value;
    this.nombre = (document.querySelector("#nombre") as HTMLInputElement).value;
    this.apellidos = (document.querySelector("#apellidos") as HTMLInputElement).value;
    this.password = (document.querySelector("#password") as HTMLInputElement).value;
    this.tipoUsuario = (document.querySelector("#tipoUsuario") as HTMLInputElement).value;

    const user = new User();
    user.username = this.username;
    user.dni = this.dni;
    user.nombre = this.nombre;
    user.apellidos = this.apellidos;
    user.password = this.password;
    user.rol = this.tipoUsuario;

    if(user.username && user.dni && user.nombre && user.apellidos && user.password && user.rol) {
      this.userService.register(user)
      .subscribe((data: any) =>{
        console.log(data);
        this.redirectHome();
      })
    } else {
      alert('Todos los campos deben estar llenos.');
    }
    return false;
  }
}
