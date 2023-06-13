import { Component } from '@angular/core'; // <---- component decorator
import { CoursesService } from './courses.service';

@Component({
  // <--- decorator
  // <courses> "courses" | <div class="courses"> ".courses" | <div id="courses"> "#course"
  selector: 'courses',

  template: `
    <!-- class binding  -->
    <button class="btn btn-primary" [class.active]="isActive">Save</button>

    <!-- style binding -->
    <button class="btn" [style.backgroundColor]="isActive ? 'blue' : 'white'">
      Save
    </button>

    <!-- 2) event binding and bubble event -->
    <div (click)="onDivClick()">
      <!-- 1) event binding -->
      <button class="btn btn-secondary" (click)="onSave($event)">Save</button>
    </div>

    <!-- two way bidning -->
    <input
      [value]="email"
      (keyup.enter)="email = $event.target.value; onKeyUp()"
    />
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

    <!-- template variables -->
    <!-- <input #email <-- template (keyup.enter)="onKeyUp(email.value)" /> -->
    <!-- <input (keyup.enter)="onKeyUp($event)" /> -->

    <!-- event filter -->
    <!-- 2) <input (keyup.enter)="onKeyUp()" /> <<--- preferred way -->
    <!-- 1) <input (keyup)="onKeyUp($event)" /> -->
  `, //

  // template: `
  //     <!-- interpolotion  -->
  //   <h2>{{ title }}</h2>
  //   <h2 [textContent]="title"></h2>

  //   <!-- string interpolation for adding dynamic value between heading-->
  //   <img src="{{ imageUrl }}"/>

  //   <!-- property binding, it works from component to the DOM-->
  //   <img [src]="imageUrl"/>
  //   <table>
  //       <tr>
  //           <td [attr.colspan]="colSpan"></td> <---- "attr" is calling the attribute in the html markup
  //       </tr>
  //   </table>
  // `,

  //   template: `
  //     <h2>{{ title }}</h2>
  //     <ul>
  //       <li *ngFor="let course of courses">{{ course }}</li>   <--- ngFor directive, its like a attribute
  //     </ul>
  //   `,

  // template: '<h2>Courses<h2>'
  // template: '<h2>{{ "title : " + getTitle() }}<h2>', // <--- data binding
  // template: '<h2>{{ "title : " title }}<h2>', // <--- data binding
}) // <--- decorator function
export class CoursesComponent {
  title = 'List of courses';
  courses;
  email = 'me@example.co.za';

  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;

  // courses = ["course1", "course2", "courses3"]

  // Logic for calling an HTTP service
  constructor(service: CoursesService) {
    //<-- dependancy injection, provid
    this.courses = service.getCourses();

    // <-- dependancy injections
    // let service = new CoursesService();
    // this.courses = service.getCourses();
  }

  //
  getTitle() {
    return this.title;
  }

  // event binding
  //1) event handler function
  onSave($event: any) {
    $event.stopPropagation(); // <--- stops the event bubble
    console.log('button was clicked ', $event);
  }

  // event binding
  // 2) event handler function
  onDivClick() {
    console.log('onDivClick was clicked');
  }

  /* event variable */
  onKeyUp(email: string) {
    console.log(email);
  }
  //   onKeyUp($event: any) {
  //     console.log($event.target.value);
  //   }

  /* event filter */
  //   2) onKeyUp() {
  //     console.log('Enter was pressed');
  //   }

  //   1) onKeyUp($event: any) {
  //     if ($event.keyCode === 13) {
  //       console.log('Enter was pressed');
  //     }
  //   }
}
