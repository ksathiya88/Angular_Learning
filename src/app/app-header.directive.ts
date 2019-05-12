import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHeader]'
})
export class AppHeaderDirective {

  constructor(public el:ElementRef) { 
    this.el =el;
  }

  ngOnInit(){
    this.el.nativeElement.style.color="black";
    this.el.nativeElement.style.fontWeight="bolder";
  }

}
