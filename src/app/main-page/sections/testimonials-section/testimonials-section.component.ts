import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

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
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      text: 'Working with you was an absolute pleasure. Your attention to detail, clean code, and ability to translate complex UI/UX designs into seamless, responsive interfaces made a huge impact on our product. You always met deadlines, communicated clearly, and collaborated effectively across teams. Any frontend team would be lucky to have you.',
      authorName: 'John Doe',
      authorTitle: 'CEO, Example Corp',
      profileLink: 'https://www.linkedin.com/in/johndoe',
      cardClass: 'card-1',
      imageVariant: 'variant-a'
    },
    {
      id: 2,
      text: 'You made our designs come to life exactly how we envisioned them—and often even better. Your deep understanding of CSS, animations, and accessibility took the user experience to the next level. I always felt like my work was in good hands with you on the frontend. Thank you for bringing such care and precision to every pixel.',
      authorName: 'Jane Smith',
      authorTitle: 'CTO, Another Example',
      profileLink: 'https://www.linkedin.com/in/janesmith',
      cardClass: 'card-2',
      imageVariant: 'variant-b'
    },
    {
      id: 3,
      text: 'You are one of the most reliable frontend developers I\'ve worked with. You not only write scalable and maintainable code, but also think ahead—anticipating edge cases and improving performance where it counts. I appreciated your initiative, especially when you introduced improvements to our component library.',
      authorName: 'Alice Johnson',
      authorTitle: 'Product Manager, Tech Co.',
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
