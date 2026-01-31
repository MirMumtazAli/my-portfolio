import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioDataService } from '../../portfolio-data.service';
import { SectionWrapperComponent } from '../shared/section-wrapper.component';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionWrapperComponent]
})
export class EducationComponent {
  portfolioService = inject(PortfolioDataService);
  educationHistory = this.portfolioService.portfolioData().education;
}