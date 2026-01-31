import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  template: `
    <section 
      [id]="sectionId()" 
      class="py-12 opacity-0 translate-y-4 transform transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none"
      appAnimateOnScroll
    >
      <div class="mb-12 flex items-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {{ title() }}
        </h2>
        <div class="ml-4 h-px flex-grow bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <ng-content></ng-content>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnimateOnScrollDirective]
})
export class SectionWrapperComponent {
  title = input.required<string>();
  sectionId = input.required<string>();
}