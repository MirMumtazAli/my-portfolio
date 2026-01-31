import { Directive, ElementRef, Renderer2, inject, afterNextRender, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnDestroy {
  private elementRef = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private observer: IntersectionObserver | undefined;

  constructor() {
    afterNextRender(() => {
      const options = {
        threshold: 0.1, // Trigger when 10% of the element is visible
      };

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(this.elementRef.nativeElement, 'opacity-0');
            this.renderer.removeClass(this.elementRef.nativeElement, 'translate-y-4');
            this.renderer.addClass(this.elementRef.nativeElement, 'opacity-100');
            this.renderer.addClass(this.elementRef.nativeElement, 'translate-y-0');
            this.observer?.unobserve(this.elementRef.nativeElement);
          }
        });
      }, options);

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
