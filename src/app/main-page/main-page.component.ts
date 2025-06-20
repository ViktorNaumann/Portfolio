import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
