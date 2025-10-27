import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class Numeric {

  constructor() { }

  @HostBinding('class') currentClass = ''

  @HostListener('keyup', ['$event']) onKeypress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.currentClass = 'invalid';
      event.preventDefault();
      } else {
        this.currentClass = 'valid';
      }
  }

}
