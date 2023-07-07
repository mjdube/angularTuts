import { Component } from '@angular/core';

// import interface
import { FavouriteChangeEventArgs } from './favourite/favourite.component';
import { LikeEventObj } from './like/like.component';
// interface FavouriteChangeEventArgs {
//   newValue: boolean;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  pressedLiked(eventArgs: LikeEventObj) {
    console.log('liked clicked from app component', eventArgs);
  }
}
