import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent {
  form;
  /*form = new FormGroup({
    name : new FormControl(),
    contact : new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([]),
  });*/

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      // name : new FormControl(),
      name: ['', Validators.required],
      /**     
      contact : new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),*/
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: any) {
    let i = this.topics.controls.indexOf(topic);
    this.topics.removeAt(i);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
