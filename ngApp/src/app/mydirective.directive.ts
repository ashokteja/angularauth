import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mydirective]'
})
export class MydirectiveDirective {

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.color = 'red';
   }

  @HostListener ('mouseenter') mouseenter(){
      this.ele.nativeElement.style.color = 'blue';
  }
  @HostListener ('mouseleave') mouseleave(){
    this.ele.nativeElement.style.color = 'green';
  }

}
