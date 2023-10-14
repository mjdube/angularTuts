import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {
  @Input('title') title: string = '';

  show: boolean = false;

  onToggleShow() {
    this.show = !this.show;
  }
}
