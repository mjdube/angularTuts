import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]',
})
export class InputFormatDirective {
  // @Input('format') format: string = '';
  @Input('InputFormat') format: string = '';

  // @HostListener('focus') onFocus() {
  //   console.log('on Focus');
  // }

  // the ElementRef gives us access to the element in the DOM
  constructor(private el: ElementRef) {}

  // HostListener Looks at DOM and find this attribute, in this case the "InputFormat" attribute
  @HostListener('blur') onBlur() {
    console.log('on Blur');
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }
}
