import { Component } from '@angular/core'; // <---- component decorator
import { CoursesService } from './courses.service';

@Component({
  // <--- decorator
  // <courses> "courses" | <div class="courses"> ".courses" | <div id="courses"> "#course"
  selector: 'courses',

  template: `
    <!-- custom pipe -->
    {{ text | summary : 10 }}
    <img [] />

    <!-- built-in Pipes -->
    <!-- {{ courses.title | uppercase }} <br />
    {{ courses.students | number }} <br />
    {{ courses.rating | number : '1.2-2' }} <br />
    {{ courses.price | currency : 'ZAR' : true : '3.2-2' }} <br />
    {{ courses.releaseDate | date : 'medium' }} -->

    <!-- class binding  -->
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> -->

    <!-- style binding -->
    <!-- <button class="btn" [style.backgroundColor]="isActive ? 'blue' : 'white'"> -->
    <!-- Save -->
    <!-- </button> -->

    <!-- 2) event binding and bubble event -->
    <!-- <div (click)="onDivClick()"> -->
    <!-- 1) event binding -->
    <!-- <button class="btn btn-secondary" (click)="onSave($event)">Save</button> -->
    <!-- </div>  -->

    <!-- two way bidning   <----- ngModel is preferred -->
    <!-- <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />  -->

    <!-- 
      two way binding
      <input
      [value]="email"
      (keyup.enter)="email = $event.target.value; onKeyUp()"
    /> -->

    <!-- template variables -->
    <!-- <input #email <-- template variable (keyup.enter)="onKeyUp(email.value)" /> -->
    <!-- <input (keyup.enter)="onKeyUp($event)" /> <-- get the value -->

    <!-- event filter -->
    <!-- 2) <input (keyup.enter)="onKeyUp()" /> <<--- preferred way -->
    <!-- 1) <input (keyup)="onKeyUp($event)" /> -->
  `, //

  // template: `
  //     <!-- string interpolotion  -->
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
})
// <--- decorator function
export class CoursesComponent {
  text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu blandit nulla. Etiam tempor velit quis felis dignissim feugiat. Quisque auctor purus in velit porta maximus. Duis sapien sapien, cursus non libero sit amet, sagittis tempor magna. Proin egestas condimentum lobortis. Sed in ligula euismod, vulputate elit quis, dignissim sem. Phasellus quis accumsan nunc. Vestibulum at erat in mi mollis vestibulum.';
  title = 'List of courses';
  courses = {
    title: 'The complete anagular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2023, 3, 1),
  };
  email = 'me@example.co.za';

  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;

  // courses = ["course1", "course2", "courses3"]

  // Logic for calling an HTTP service
  constructor(service: CoursesService) {
    // 2) <-- dependancy injection, provide decoupled class
    // this.courses = service.getCourses();
    // 1) <-- dependancy injections coupled class
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

  /* two way binding event  variable */
  onKeyUp() {
    console.log(this.email);
  }

  // template variable <------ Easier way
  // onKeyUp(email: string) {
  //   console.log(email);
  // }

  //   template variable
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
