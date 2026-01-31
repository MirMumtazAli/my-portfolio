import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../portfolio-data.service';
import { SectionWrapperComponent } from '../shared/section-wrapper.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionWrapperComponent, AnimateOnScrollDirective]
})
export class ProjectsComponent {
  portfolioService = inject(PortfolioDataService);
  projects = this.portfolioService.portfolioData().projects;

  expandedProjects = signal<Set<string>>(new Set());
  carouselImageIndexes = signal<Map<string, number>>(new Map());

  toggleDescription(projectTitle: string): void {
    this.expandedProjects.update(set => {
      if (set.has(projectTitle)) {
        set.delete(projectTitle);
      } else {
        set.add(projectTitle);
      }
      return new Set(set);
    });
  }

  getImageIndex(projectTitle: string): number {
    return this.carouselImageIndexes().get(projectTitle) ?? 0;
  }
  
  changeImage(projectTitle: string, direction: 1 | -1, imageCount: number): void {
    this.carouselImageIndexes.update(map => {
      const currentIndex = map.get(projectTitle) ?? 0;
      let newIndex = currentIndex + direction;
      if (newIndex < 0) {
        newIndex = imageCount - 1;
      } else if (newIndex >= imageCount) {
        newIndex = 0;
      }
      map.set(projectTitle, newIndex);
      return new Map(map);
    });
  }
}