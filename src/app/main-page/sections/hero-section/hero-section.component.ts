import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit {
  private hoverTimeouts: Map<HTMLElement, number> = new Map();

  constructor(private elementRef: ElementRef, private translate: TranslateService) {}

  ngAfterViewInit() {
    const letters = this.elementRef.nativeElement.querySelectorAll('.letter');
    
    letters.forEach((letter: HTMLElement) => {
      letter.addEventListener('mouseenter', () => {

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

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
