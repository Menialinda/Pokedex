import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[RollOnScroll]'
})
export class RollOnScrollDirective {

  @HostListener('window:scroll', []) onWindowScroll(){
    const rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;

    this.render.setStyle(
      this.elementref.nativeElement,
      'transform',
      rotation
    )
  }

  constructor(private elementref: ElementRef, private render: Renderer2) { }

}
