import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      text: 'This is a fantastic product! Highly recommend it to everyone.',
      authorName: 'John Doe',
      authorTitle: 'CEO, Example Corp',
      profileLink: 'https://www.linkedin.com/in/johndoe',
      cardClass: 'card-1',
      imageVariant: 'variant-a'
    },
    {
      id: 2,
      text: 'Amazing service and support. Will definitely use again.',
      authorName: 'Jane Smith',
      authorTitle: 'CTO, Another Example',
      profileLink: 'https://www.linkedin.com/in/janesmith',
      cardClass: 'card-2',
      imageVariant: 'variant-b'
    },
    {
      id: 3,
      text: 'A game changer in the industry. Five stars!',
      authorName: 'Alice Johnson',
      authorTitle: 'Product Manager, Tech Co.',
      profileLink: 'https://www.linkedin.com/in/alicejohnson',
      cardClass: 'card-3',
      imageVariant: 'variant-a'
    }
  ];
}
