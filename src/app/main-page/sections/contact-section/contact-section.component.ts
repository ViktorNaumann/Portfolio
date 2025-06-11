import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, FooterComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getNamePlaceholder(): string {
    if (this.formSubmitted && this.contactForm.get('name')?.errors) {
      return this.translate.instant('CONTACT.NAME_ERROR_PLACEHOLDER');
    }
    return this.translate.instant('CONTACT.NAME_PLACEHOLDER');
  }

  getEmailPlaceholder(): string {
    if (this.formSubmitted && this.contactForm.get('email')?.errors) {
      return this.translate.instant('CONTACT.EMAIL_ERROR_PLACEHOLDER');
    }
    return this.translate.instant('CONTACT.EMAIL_PLACEHOLDER');
  }

  getMessagePlaceholder(): string {
    if (this.formSubmitted && this.contactForm.get('message')?.errors) {
      return this.translate.instant('CONTACT.MESSAGE_ERROR_PLACEHOLDER');
    }
    return this.translate.instant('CONTACT.MESSAGE_PLACEHOLDER');
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      // Form submission logic
      console.log(this.contactForm.value);
    }
  }
}
