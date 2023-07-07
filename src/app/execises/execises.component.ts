import { Component } from '@angular/core';

@Component({
  selector: 'execises',
  templateUrl: './execises.component.html',
  styleUrls: ['./execises.component.css'],
})
export class ExecisesComponent {
  text: string = '';
  isTouched: boolean = true;

  touchedStar() {
    console.log('touch clicked');

    this.isTouched = !this.isTouched;
  }
}
