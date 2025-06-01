import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isGerman = false;

  toggleLanguage() {
    this.isGerman = !this.isGerman;
   
  }

  setLanguage(german: boolean) {
    if (this.isGerman !== german) {
      this.isGerman = german;
      console.log('Sprache gewechselt zu:', this.isGerman ? 'Deutsch' : 'Englisch');
    }
  }

}
