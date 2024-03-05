import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostListener('click') clicked() {
    console.log('Event Clicked');
  }
}
