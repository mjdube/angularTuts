import { Component } from '@angular/core';

@Component({
  selector: 'form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
})
export class FormContactComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Fax' },
  ];

  log(x: any) {
    console.log(x);
  }

  submit(f: any) {
    console.log(f);
  }
}
