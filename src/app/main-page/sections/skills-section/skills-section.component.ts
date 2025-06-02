import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {

   skills = [
    { name: 'HTML', icon: 'HTML' },
    { name: 'CSS', icon: 'CSS' },
    { name: 'JavaScript', icon: 'Js' },
    { name: 'TypeScript', icon: 'Ts' },
    { name: 'Angular', icon: 'Angular' },
    { name: 'Firebase', icon: 'Firebase' },
    { name: 'Git', icon: 'Git' },
    { name: 'Rest-Api', icon: 'Rest-Api' },
    { name: 'Scrum', icon: 'Scrum' },
    { name: 'Material<br>Design', icon: 'Material Design' }
  ];

}
