import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent {
  categories: any[] = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];

  onSubmit(course: any) {
    console.log('form is valid', course);
  }

  log(form: NgModel) {
    if (form.control.errors?.['minlength']) {
      console.log(form);
    } else {
      console.log('No minlength error found.');
    }
  }
}
