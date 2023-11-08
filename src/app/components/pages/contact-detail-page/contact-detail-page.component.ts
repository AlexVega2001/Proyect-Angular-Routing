import { Component, OnInit } from '@angular/core';
import { IContact, Role } from 'src/app/models/interfaces/Contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit{

  contact: IContact = {
    id: 0,
    email: '',
    password: '',
    name: '',
    role: Role.Invitado,
    avatar: ''
  }

  ngOnInit(): void {
    if(this.contact) {
      this.contact = history.state.data;
    }
  }

}
