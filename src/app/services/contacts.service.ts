import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../models/interfaces/Contact.interface';
import { CONTACTOS } from '../mocks/User.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  obtenerContactos(): Promise<IContact[]> {
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactosPorId(id: number): Promise<IContact> | undefined {
    //Buscamos la facultad por ID dentro de la lista de facultades registradas.
    const contacto = CONTACTOS.find((contacto: IContact) => contacto.id === id);
    if(contacto) {
      return Promise.resolve(contacto);
    } else {
      return;
    }
  }
}
