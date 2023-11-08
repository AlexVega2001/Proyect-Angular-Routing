import { Component, OnInit } from '@angular/core';
import { IFacultad } from 'src/app/models/interfaces/Facultad.interface';
import { FacultadesService } from 'src/app/services/facultades.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //Creamos una lista de facultades
  listFacultades: IFacultad[] = [];

  //Inyectamos en el constructos el servicio de facultades
  constructor() { }

  ngOnInit(): void {

  }

}
