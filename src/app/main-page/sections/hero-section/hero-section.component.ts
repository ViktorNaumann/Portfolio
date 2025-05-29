import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  onClick() {
    console.log('Button clicked');
    
  }
}
