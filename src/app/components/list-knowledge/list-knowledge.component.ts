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
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    setTimeout(() =>this.getUserAll(),1000)
  }

  public redirectRegister(){
    window.location.href = "user/add"
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
