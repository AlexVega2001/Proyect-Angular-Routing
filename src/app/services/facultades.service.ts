import { Injectable } from '@angular/core';

//Importamos la lista de facultades del mock
import { FACULTADES } from '../mocks/Facultad.mock';
import { IFacultad } from '../models/interfaces/Facultad.interface';

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {

  constructor() { }

  obtenerFacultades(): Promise<IFacultad[]> {
    return Promise.resolve(FACULTADES);
  }

  obtenerFacultadesPorId(id: string): Promise<IFacultad> | undefined {
    //Buscamos la facultad por ID dentro de la lista de facultades registradas.
    const facultad = FACULTADES.find((facultad: IFacultad) => facultad.idFacultad === id);
    if(facultad) {
      return Promise.resolve(facultad);
    } else {
      return;
    }
  }
}
