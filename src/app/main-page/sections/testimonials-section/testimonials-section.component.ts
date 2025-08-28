import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorTitle: string;
  profileLink: string;
  cardClass: string;
  imageVariant: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})

export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      text: 'Dear Viktor, there are two keywords that immediately come to mind when I think of you: lightning-fast and harmony! :D You complete tasks in impressively short time with absolute reliability. You maintain calm and harmony at all times, which in my eyes is a real talent. Your helpful and committed nature make you a true pillar of the team, and I appreciate that tremendously. I hope we will continue to work together on more projects in the future!',
      authorName: 'Dr. Michelle Puschkarow',
      authorTitle: 'Frontend Developer',
      profileLink: 'https://www.linkedin.com/in/michellepuschkarow',
      cardClass: 'card-1',
      imageVariant: 'variant-a'
    },
    {
      id: 2,
      text: 'Viktor, working with you on our shared business project JOIN was consistently pleasant and enriching. Your calm and composed nature brings stability to the team, and I find it impressive how you solve problems independently without losing sight of others. You are always helpful, reliable, and a true anchor of calm in the project. I greatly appreciate your dedication and look forward to working together on something again!',
      authorName: 'Marco Palummieri',
      authorTitle: 'Frontend Developer',
      profileLink: 'https://www.linkedin.com/in/marcopalummieri',
      cardClass: 'card-2',
      imageVariant: 'variant-b'
    },
    {
      id: 3,
      text: 'You are one of the most reliable frontend developers I\'ve worked with. You not only write scalable and maintainable code, but also think ahead—anticipating edge cases and improving performance where it counts. I appreciated your initiative, especially when you introduced improvements to our component library.',
      authorName: 'Alice Johnson',
      authorTitle: 'Frontend Developer',
      profileLink: 'https://www.linkedin.com/in/alicejohnson',
      cardClass: 'card-3',
      imageVariant: 'variant-a'
    }
  ];

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
