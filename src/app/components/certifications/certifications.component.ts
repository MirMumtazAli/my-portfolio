import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioDataService } from '../../portfolio-data.service';
import { SectionWrapperComponent } from '../shared/section-wrapper.component';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionWrapperComponent]
})
export class CertificationsComponent {
  portfolioService = inject(PortfolioDataService);
  certifications = this.portfolioService.portfolioData().certifications;
}