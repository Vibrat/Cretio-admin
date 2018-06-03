import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[formControlName]'
})
export class AccountValidateDirective {

  constructor(private el: ElementRef) { }

}
