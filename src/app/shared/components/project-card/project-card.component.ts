import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectDataService, Project } from '../../services/project-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
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
    private projectDataService: ProjectDataService
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

    // Nächstes Projekt finden
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
    if (this.project?.githubUrl) {
      window.open(this.project.githubUrl, '_blank');
    }
  }

  openLiveTest() {
    if (this.project?.liveTestUrl) {
      window.open(this.project.liveTestUrl, '_blank');
    }
  }
}
