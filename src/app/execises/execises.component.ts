import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'execises',
  templateUrl: './execises.component.html',
  styleUrls: ['./execises.component.css'],
})
export class ExecisesComponent {
  @Input('isLike') isLike: boolean = false;
  @Input('likeCount') likeCount: number = 0;
  @Output('change') click = new EventEmitter();

  text: string = '';
  isTouched: boolean = true;

  liked: boolean = this.isLike;

  touchedStar() {
    console.log('touch clicked');
    this.isTouched = !this.isTouched;
  }

  likedClicked() {
    console.log('Liked clicked');
    this.isLike = !this.isLike;

    if (this.isLike) this.likeCount++;
    else this.likeCount--;

    this.click.emit({ isLike: this.isLike, count: this.likeCount });
  }
}

export interface Like {
  liked: boolean;
}
