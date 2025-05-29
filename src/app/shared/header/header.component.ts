import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isGerman = false;

  toggleLanguage() {
    this.isGerman = !this.isGerman;
    // Hier könnte später die eigentliche Sprachänderung implementiert werden
    // z.B. mit ngx-translate oder i18n
    
    console.log('Sprache gewechselt zu:', this.isGerman ? 'Deutsch' : 'Englisch');
  }

}
