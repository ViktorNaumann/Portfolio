import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'project/:id', loadComponent: () => import('./shared/components/project-card/project-card.component').then(m => m.ProjectCardComponent) },
    { path: '**', redirectTo: '' }
];
