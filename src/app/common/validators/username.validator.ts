import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | any {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return false;
  }

  static async shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | any> {
    if (control.value == 'mlungisi') return { shouldBeUnique: true };

    return false;
  }

  static async shouldBeUnique1(
    control: AbstractControl
  ): Promise<ValidationErrors | any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'mlungisi') resolve({ shouldBeUnique: true });
        else resolve(false);
      }, 2000);
    });
  }

  /*
    cannotContainSpace1(control: AbstractControl) : ValidationErrors | any {
        if ((control.value as string).indexOf(' ') >= 0)
            return { minlength : {
                requiredLength : 10,
                actualLength : control?.value?.length
            }}
    }*/
}
