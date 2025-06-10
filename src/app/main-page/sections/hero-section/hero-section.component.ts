import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {
  private hoverTimeouts: Map<HTMLElement, number> = new Map();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const letters = this.elementRef.nativeElement.querySelectorAll('.letter');
    
    letters.forEach((letter: HTMLElement) => {
      letter.addEventListener('mouseenter', () => {
        // Vorherigen Timeout löschen falls vorhanden
        if (this.hoverTimeouts.has(letter)) {
          clearTimeout(this.hoverTimeouts.get(letter)!);
        }
        
        letter.classList.add('hovered');
      });

      letter.addEventListener('mouseleave', () => {
       
        const timeout = setTimeout(() => {
          letter.classList.remove('hovered');
          this.hoverTimeouts.delete(letter);
        }, 100);
        
        this.hoverTimeouts.set(letter, timeout);
      });
    });
  }

  onClick() {
    console.log('Button clicked');
  }
}
