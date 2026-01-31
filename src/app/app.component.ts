import { Component, ChangeDetectionStrategy, inject, signal, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PortfolioDataService } from './portfolio-data.service';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent,
    NavigationComponent,
    ExperienceComponent
  ],
  host: {
    '(document:mousemove)': 'onMouseMove($event)'
  }
})
export class AppComponent implements OnInit {
  portfolioService = inject(PortfolioDataService);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  data = this.portfolioService.portfolioData;
  currentYear = new Date().getFullYear();
  gradientStyle = signal('');
  isMobileMenuOpen = signal(false);
  isDarkMode = signal(false);

  navLinks = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'contact', name: 'Contact' },
  ];

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const useDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);
    this.isDarkMode.set(useDark);
    this.updateTheme(useDark);
  }

  toggleTheme(): void {
    this.isDarkMode.update(isDark => {
      const newIsDark = !isDark;
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      this.updateTheme(newIsDark);
      return newIsDark;
    });
  }

  private updateTheme(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(this.document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark');
    }
  }

  onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    this.gradientStyle.set(`radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(156, 163, 175, 0.1), transparent 80%)`);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(event: MouseEvent, id: string): void {
    event.preventDefault();
    this.closeMobileMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
