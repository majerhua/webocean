import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Report } from 'src/app/models/report.model';
@Component({
  selector: 'app-identified-species',
  templateUrl: './identified-species.component.html',
  styleUrls: ['./identified-species.component.css']
})
export class IdentifiedSpeciesComponent implements OnInit {


  dataReport = new Array<Report>();

  constructor(private userService: UserService) { 

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
