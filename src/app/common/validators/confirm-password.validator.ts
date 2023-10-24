import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ConfirmPasswordValidator {
  static confirmPassword(control: AbstractControl): ValidationErrors | any {
    if (control.get('newPass')?.value == control.get('confirmPass')?.value)
      return { cannotContainSpace: true };

    return false;
  }
}
