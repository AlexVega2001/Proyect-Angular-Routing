import { Component, OnInit } from '@angular/core';

//Creamos una interfaces para la lista de productos
export type Productos = {
  nameProduct: string;
  price: number;
  description: string
}

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {

  listaElementos: Productos[] = [
    {
      nameProduct: "Leche",
      price: 0.90,
      description: "Leche en funda"
    },
    {
      nameProduct: "Huevos",
      price: 0.30,
      description: "Huevo Unitario"
    },
    {
      nameProduct: "Queso",
      price: 2.20,
      description: "Queso Bueno"
    },
    {
      nameProduct: "Arroz",
      price: 0.40,
      description: "Arroz Flor"
    }
  ];
  cargando: boolean = true;
  opcion: number = 0;

  constructor() {  }

  ngOnInit(): void {
      
  }

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida;
  }
}
