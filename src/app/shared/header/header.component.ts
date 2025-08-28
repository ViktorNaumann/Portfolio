import { Component, OnInit } from '@angular/core';
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

export class HeaderComponent implements OnInit {
  isGerman = false;
  isMobileMenuOpen = false;
  
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.isGerman = savedLanguage === 'de';
    this.translate.use(savedLanguage);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
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
