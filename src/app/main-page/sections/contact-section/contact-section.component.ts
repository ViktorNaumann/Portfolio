import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslatePipe, FooterComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  isSubmitting = false;
  submitMessage = '';
  submitMessageType: 'success' | 'error' | '' = '';

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private http: HttpClient
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
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';
      
      // URL zur sendMail.php auf deinem Server (Root-Verzeichnis)
      const phpScriptUrl = 'https://viktor-naumann.de/sendMail.php'; // Passe diese URL an deine Domain an
      
      const formData = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value
      };

      this.http.post(phpScriptUrl, formData).subscribe({
        next: (response) => {
          this.submitMessage = this.translate.instant('CONTACT.SUCCESS_MESSAGE') || 'Nachricht erfolgreich gesendet!';
          this.submitMessageType = 'success';
          this.contactForm.reset();
          this.formSubmitted = false;
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Fehler beim Senden der E-Mail:', error);
          this.submitMessage = this.translate.instant('CONTACT.ERROR_MESSAGE') || 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.';
          this.submitMessageType = 'error';
          this.isSubmitting = false;
        }
      });
    }
  }
}
