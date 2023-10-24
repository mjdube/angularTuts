import { Component } from '@angular/core'; // <- component decorator

// import interface
// interface FavouriteChangeEventArgs {
//   newValue: boolean;
// }
import { FavouriteChangeEventArgs } from './favourite/favourite.component';

import { LikeEventObj } from './like/like.component';
import { Like } from './execises/execises.component';

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
  isLike: boolean = false;
  body: string = 'hello';

  viewMode: string = 'map';

  canSave = false;

  title = 'hello-world';

  post = {
    title: 'Title',
    isFavourite: true,
  };

  twet = {
    body: "here's the body of a tweet...",
    isLiked: false,
    likesCount: 2,
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

  likeClicked(liked: Like) {
    console.log('likeClicked function pressed', liked);
  }

  changeViewMode(view: string) {
    if (view.includes('list')) this.viewMode = 'list';
    else if (view.includes('map')) this.viewMode = 'map';
  }
}
