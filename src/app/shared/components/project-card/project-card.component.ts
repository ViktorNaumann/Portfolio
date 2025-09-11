import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectDataService, Project } from '../../services/project-data.service';
import { Subscription } from 'rxjs';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TranslatePipe, HeaderComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent implements OnInit, OnDestroy {
  project: Project | null = null;
  nextProject: Project | null = null;
  private routeSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectDataService: ProjectDataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.loadProject(Number(params['id']));
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  private loadProject(projectId: number) {
    this.project = this.projectDataService.getProjectById(projectId) || null;
    if (!this.project) {
      this.router.navigate(['/']);
      return;
    }
    this.nextProject = this.projectDataService.getNextProject(projectId);
  }

  goBack() {
    this.router.navigate(['/'], { fragment: 'projects' });
  }

  goToNextProject() {
    if (this.nextProject) {
      this.router.navigate(['/project', this.nextProject.id]);
    }
  }

  openGithub() {
    if (this.project?.githubUrl && !this.project?.inProgress) {
      window.open(this.project.githubUrl, '_blank');
    }
  }

  openLiveTest() {
    if (this.project?.liveTestUrl && !this.project?.inProgress) {
      window.open(this.project.liveTestUrl, '_blank');
    }
  }

  getTechIconPath(technology: string): string {
    const techMap: { [key: string]: string } = {
      'JavaScript': 'assets/img/skills/skill.icons/Property 1=Js.svg',
      'HTML': 'assets/img/skills/skill.icons/Property 1=HTML.svg',
      'CSS': 'assets/img/skills/skill.icons/Property 1=CSS.svg',
      'Angular': 'assets/img/skills/skill.icons/Property 1=Angular.svg',
      'TypeScript': 'assets/img/skills/skill.icons/Property 1=Ts.svg',
      'Firebase': 'assets/img/skills/skill.icons/Property 1=Firebase.svg'
    };
    return techMap[technology] || 'assets/img/skills/skill.icons/Property 1=Default.svg';
  }

  getProjectImplementationDetails(): string {
    if (!this.project) return '';
    return `PROJECTS.${this.getProjectKey(this.project.id)}.IMPLEMENTATION_DETAILS`;
  }

  getProjectDescription(): string {
    if (!this.project) return '';
    return `PROJECTS.${this.getProjectKey(this.project.id)}.DESCRIPTION`;
  }

  private getProjectKey(projectId: number): string {
    const projectKeyMap: { [key: number]: string } = {
      1: 'JOIN',
      2: 'ELPOLLOLOCOGAME',
      3: 'DABUBBLE',
    };
    
    return projectKeyMap[projectId] || `PROJECT_${projectId}`;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
