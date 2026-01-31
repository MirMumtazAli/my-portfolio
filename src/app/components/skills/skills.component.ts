import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioDataService } from '../../portfolio-data.service';
import { SectionWrapperComponent } from '../shared/section-wrapper.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionWrapperComponent]
})
export class SkillsComponent {
  portfolioService = inject(PortfolioDataService);
  skillCategories = this.portfolioService.portfolioData().skills;
}