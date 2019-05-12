import { Directive,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  el:ElementRef;

  constructor(el:ElementRef) {
      this.el = el;
      this.color="green";
   }

 @HostBinding('style.color') color: string;
 
 @HostListener('mouseenter') onmouseEnter(){
   this.highlight('red');
   this.highlightColor('yellow');
 }

 @HostListener('mouseleave') onmouseLeave(){
  this.highlight(null);
  this.highlightColor("green");
}

   public highlight(color:string){
     this.el.nativeElement.style.backgroundColor = color;
   }

   public highlightColor(color:string){
     this.color = color;
   }


}
