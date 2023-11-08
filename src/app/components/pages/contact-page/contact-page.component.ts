import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/interfaces/Contact.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{

  listContacts: IContact [] = [];

  constructor(private contactService: ContactsService, 
              private router: Router) {}

  ngOnInit(): void {
    this.contactService.obtenerContactos()
    .then((data) => {
      this.listContacts = data;
    })
  }

  //Metodo para el paso de información entre componentes a traves del estado
  DetailContact(contact: IContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    }
    this.router.navigate(['/contacts-detail'], navigationExtras)
  }

}
