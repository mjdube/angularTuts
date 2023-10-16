import { Component, Input } from '@angular/core';

@Component({
  selector: 'boostrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  @Input() body: string = 'hello';
}
