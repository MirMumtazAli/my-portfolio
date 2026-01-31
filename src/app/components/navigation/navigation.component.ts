import { Component, ChangeDetectionStrategy, signal, inject, afterNextRender, OnDestroy, input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PortfolioDataService } from '../../portfolio-data.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnDestroy {
  private document = inject(DOCUMENT);
  portfolioService = inject(PortfolioDataService);
  resumeUrl = this.portfolioService.portfolioData().resumeUrl;

  navLinks = input.required<{ id: string, name: string }[]>();

  activeSection = signal('about');
  private observer: IntersectionObserver | undefined;

  constructor() {
    afterNextRender(() => {
      const sections = this.navLinks()
        .map(link => this.document.getElementById(link.id))
        .filter(el => el) as HTMLElement[];

      if (sections.length === 0) return;

      const options = {
        rootMargin: '0px 0px -40% 0px',
        threshold: 0,
      };

      this.observer = new IntersectionObserver(entries => {
        // Find the last intersecting element to handle scrolling up correctly
        const intersectingEntries = entries.filter(e => e.isIntersecting);
        if (intersectingEntries.length > 0) {
          const lastIntersecting = intersectingEntries[intersectingEntries.length-1];
           this.activeSection.set(lastIntersecting.target.id);
        }
      }, options);

      sections.forEach(section => this.observer!.observe(section));
    });
  }

  scrollTo(event: MouseEvent, id: string): void {
    event.preventDefault();
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}