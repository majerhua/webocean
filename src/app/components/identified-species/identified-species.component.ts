import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identified-species',
  templateUrl: './identified-species.component.html',
  styleUrls: ['./identified-species.component.css']
})
export class IdentifiedSpeciesComponent implements OnInit {


  imagenOne = "../../../assets/imagen_one.PNG";
  imagenTwo = "../../../assets/imagen_two.PNG";
  imagenThree = "../../../assets/imagen_thre.PNG";

  constructor() { 

  }

  ngOnInit(): void {
  }

}
