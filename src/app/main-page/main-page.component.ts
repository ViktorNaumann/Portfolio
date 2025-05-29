import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { TestimonialCardComponent } from '../shared/components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeroSectionComponent, 
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    TestimonialCardComponent,
    ContactSectionComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
