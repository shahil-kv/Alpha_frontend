import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dragScroll]',
})
export class DragScrollDirective {
  isDown: boolean = false;
  startX: number = 0;
  scrollLeft: number = 0;
  el: any;
  @HostListener('mouseup', ['$event'])
  onMouseup() {
    this.isDown = false;
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(e: any) {
    this.isDown = true;
    this.startX = e.pageX - this.el.offsetLeft;
    this.scrollLeft = this.el.scrollLeft;
  }
  @HostListener('mouseleave', ['$event'])
  onMouseleave() {
    this.isDown = false;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(e: any) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.el.offsetLeft;
    const walk = (x - this.startX) * 3;
    this.el.scrollLeft = this.scrollLeft - walk;
  }

  constructor(public element: ElementRef) {
    this.el = element.nativeElement;
    this.el.style.overflowX = 'auto';
  }
}
