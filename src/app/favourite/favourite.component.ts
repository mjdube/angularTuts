import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  styles: [``],
  // inputs: ['isFavourite'],

  // It emulate the shadow DOM
  // encapsulation : ViewEncapsulation.Emulated
})
export class FavouriteComponent {
  // Input properties
  //@Input() isFavourite: boolean = true; //1) <---- preferred way to use input properties
  // isFavourite: boolean = true; 2)

  // Alias/nickname input properties
  @Input('is-Favourite') isFavourite: boolean = true;

  // Output properties
  // @Output() change = new EventEmitter();

  // Alias Output properties
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    // notifying others that something has changed
    // this.change.emit()

    // this.change.emit(this.isFavourite);
    // this.change.emit({ newValue: this.isFavourite });
    this.click.emit({ newValue: this.isFavourite });
  }
}

// Export interface
export interface FavouriteChangeEventArgs {
  newValue: boolean;
}
