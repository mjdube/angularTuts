import { Component } from '@angular/core'; // <- component decorator

// import interface
import { FavouriteChangeEventArgs } from './favourite/favourite.component';
import { LikeEventObj } from './like/like.component';
// interface FavouriteChangeEventArgs {
//   newValue: boolean;
// }

interface Course {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  viewMode: string = 'map';

  canSave = false;

  title = 'hello-world';

  post = {
    title: 'Title',
    isFavourite: true,
  };

  tweet = {
    body: "here's the body of a tweet...",
    isLiked: false,
    likesCount: 2,
  };

  courses: Course[] = [];

  // safe traversal operator
  task = {
    title: 'Review Appplication',
    assignee: null,
  };

  onLoadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  trackCourse(index: number, course: Course) {
    return course ? course.id : undefined;
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course: Course) {
    console.log('remove clicked');

    this.courses = this.courses.filter((c) => c.id != course.id);
  }

  // Output property
  // 1)
  // onFavouriteChange(isFavourite: boolean) {
  //   console.log('favourite changed', isFavourite);
  // }

  // 2)
  // onFavouriteChange(eventArgs: any) {
  //   console.log('favourite changed', eventArgs);
  // }

  // 3)
  onFavouriteChange(eventArgs: FavouriteChangeEventArgs) {
    console.log('favourite changed', eventArgs.newValue);
  }
  // Like exercise functioin
  pressedLiked(eventArgs: LikeEventObj) {
    console.log('liked clicked from app component', eventArgs);
  }
}
