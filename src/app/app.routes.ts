import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal/legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'project/:id', component: ProjectCardComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: '**', redirectTo: '' }
];
