import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
      email: ['', [Validators.required, this.customEmailValidator]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  customEmailValidator(control: AbstractControl): { [key: string]: any } | null {
    const email = control.value;
    if (!email) {
      return null;
    }
    if (!email.includes('@')) {
      return { invalidEmail: { message: 'E-Mail muss ein @-Zeichen enthalten' } };
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|de|org|net|edu|gov|mil|int|eu|co\.uk|co|info|biz|name|museum|aero|jobs|travel|mobi|tel|asia|cat|post|xxx|berlin|hamburg|bayern|nrw|saarland|app|dev|tech|io|ai|me|ly|cc|tv|fm|am|ws|tk|ml|cf|ga)$/i;
    if (!emailPattern.test(email)) {
      return { invalidEmail: { message: 'Ungültige E-Mail-Adresse' } };
    }
    return null;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getNamePlaceholder(): string {
    const nameControl = this.contactForm.get('name');
    if (nameControl?.touched && nameControl?.errors) {
      return this.translate.instant('CONTACT.NAME_ERROR_PLACEHOLDER');
    }
    return this.translate.instant('CONTACT.NAME_PLACEHOLDER');
  }

  getEmailPlaceholder(): string {
    const emailControl = this.contactForm.get('email');
    if (emailControl?.touched && emailControl?.errors) {
      const errors = emailControl.errors;
      if (errors?.['required']) {
        return this.translate.instant('CONTACT.EMAIL_REQUIRED_ERROR') || 'E-Mail ist erforderlich';
      }
      if (errors?.['invalidEmail']) {
        return this.translate.instant('CONTACT.EMAIL_INVALID_ERROR') || 'Gültige E-Mail-Adresse eingeben (z.B. name@domain.com)';
      }
    }
    return this.translate.instant('CONTACT.EMAIL_PLACEHOLDER');
  }

  getMessagePlaceholder(): string {
    const messageControl = this.contactForm.get('message');
    if (messageControl?.touched && messageControl?.errors) {
      return this.translate.instant('CONTACT.MESSAGE_ERROR_PLACEHOLDER');
    }
    return this.translate.instant('CONTACT.MESSAGE_PLACEHOLDER');
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid && !this.isSubmitting) {
      this.sendContactForm();
    }
  }

  private sendContactForm() {
    this.isSubmitting = true;
    this.submitMessage = '';
    const formData = this.buildFormData();
    const phpScriptUrl = 'https://viktor-naumann.de/sendMail.php';
    this.http.post(phpScriptUrl, formData).subscribe({
      next: () => this.handleSubmitSuccess(),
      error: (error) => this.handleSubmitError(error)
    });
  }

  private buildFormData() {
    return {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      message: this.contactForm.get('message')?.value
    };
  }

  private handleSubmitSuccess() {
    this.submitMessage = this.translate.instant('CONTACT.SUCCESS_MESSAGE') || 'Nachricht erfolgreich gesendet!';
    this.submitMessageType = 'success';
    this.contactForm.reset();
    this.formSubmitted = false;
    this.isSubmitting = false;
  }

  private handleSubmitError(error: any) {
    console.error('Fehler beim Senden der E-Mail:', error);
    this.submitMessage = this.translate.instant('CONTACT.ERROR_MESSAGE') || 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.';
    this.submitMessageType = 'error';
    this.isSubmitting = false;
  }
}
