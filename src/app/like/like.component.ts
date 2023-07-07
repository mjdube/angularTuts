import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('likesCount') likesCount: number = 0;
  @Input('isActive') isLiked: boolean = false;

  @Output('click') click = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    if (this.isLiked == true) this.likesCount++;
    else this.likesCount--;

    this.click.emit({ isLike: this.isLiked, likedCount: this.likesCount });
    console.log('click from liked component...', {
      isLike: this.isLiked,
      likedCount: this.likesCount,
    });
  }
}

export interface LikeEventObj {
  body: string;
  likeCount: number;
  isLiked: boolean;
}
