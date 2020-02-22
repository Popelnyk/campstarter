import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  @Input("theme") theme:string;




  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = "bold";
  }
}
