import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioDataService } from '../../portfolio-data.service';
import { SectionWrapperComponent } from '../shared/section-wrapper.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionWrapperComponent]
})
export class AboutComponent {
  portfolioService = inject(PortfolioDataService);
  data = this.portfolioService.portfolioData;
}