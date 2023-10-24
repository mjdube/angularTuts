import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  account = new FormGroup({});

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    }),
  });

  /*form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique1,
    ]),
    password: new FormControl('', Validators.required),
  });*/

  login() {
    this.form.setErrors({
      invalidLogin: true,
    });

    /* 
    let isValid = authService.login(this.form.value);
     if (!isValid){
       this.form.setErrors({
         invalidLogin : true
       })
    } 
    */
  }

  get username() {
    return this.form.get('account.username');
    // FormControl Section
    // return this.form.get('username');
  }
}
