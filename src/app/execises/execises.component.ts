import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../common/validators/confirm-password.validator';

@Component({
  selector: 'execises',
  templateUrl: './execises.component.html',
  styleUrls: ['./execises.component.css'],
})
export class ExecisesComponent {
  @Input('isLike') isLike: boolean = false;
  @Input('likeCount') likeCount: number = 0;
  @Output('change') click = new EventEmitter();

  form;

  shipExp: boolean = false;
  billExp: boolean = false;

  text: string = '';
  isTouched: boolean = true;

  liked: boolean = this.isLike;

  categories: any[] = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Language' },
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPass: ['', [Validators.required]],
        newPass: ['', [Validators.required]],
        confirmPass: ['', [Validators.required]],
      },
      { ConfirmPasswordValidator }
    );
  }

  submitForm() {
    console.log(this.form);
  }

  get newPassword() {
    return this.form.get('newPass');
  }

  touchedStar() {
    console.log('touch clicked');
    this.isTouched = !this.isTouched;
  }

  likedClicked() {
    console.log('Liked clicked');
    this.isLike = !this.isLike;

    if (this.isLike) this.likeCount++;
    else this.likeCount--;

    this.click.emit({ isLike: this.isLike, count: this.likeCount });
  }

  openExpend(change: string) {
    if (change.match('ship')) {
      this.shipExp = !this.shipExp;
    } else if (change.match('bill')) {
      this.billExp = !this.billExp;
    }
  }

  log(c: any) {
    console.log(c);
  }

  submit(f: any) {
    console.log(f);
  }
}

export interface Like {
  liked: boolean;
}
