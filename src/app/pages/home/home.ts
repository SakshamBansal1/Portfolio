import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { AboutSectionComponent } from '../../components/about-section/about-section';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section';
import { ExperienceSectionComponent } from '../../components/experience-section/experience-section';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section';
import { CertificationsSectionComponent } from '../../components/certifications-section/certifications-section';
import { ContactSectionComponent } from '../../components/contact-section/contact-section';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    CertificationsSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
