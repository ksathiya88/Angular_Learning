import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appAppHeader]'
})
export class AppHeaderDirective implements  OnInit{

  constructor(public el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.fontWeight = 'bolder';
  }

}
