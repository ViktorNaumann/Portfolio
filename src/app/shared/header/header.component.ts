import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  isGerman = false;
  isMobileMenuOpen = false;

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  toggleLanguage() {
    this.isGerman = !this.isGerman;
    const language = this.isGerman ? 'de' : 'en';
    this.changeLanguage(language);
  }

  setLanguage(isGerman: boolean) {
    this.isGerman = isGerman;
    const language = isGerman ? 'de' : 'en';
    this.changeLanguage(language);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
