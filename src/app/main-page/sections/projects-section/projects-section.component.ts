import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";
import { ProjectDataService, Project } from '../../../shared/services/project-data.service';

interface ProjectItem {
  type: 'header' | 'project';
  title?: string;
  description?: string;
  imageUrl?: string;
  featured?: boolean;
  project?: Project;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectDataService: ProjectDataService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.projects = this.projectDataService.getAllProjects();
  }

  get projectsWithHeader(): ProjectItem[] {
    const headerItem: ProjectItem = { type: 'header' };
    const projectItems: ProjectItem[] = this.projects.map(project => ({
      type: 'project' as const,
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      featured: project.featured,
      project: project
    }));
    
    return [headerItem, ...projectItems];
  }

  getProjectTitle(project: Project | undefined): string {
    if (!project) return '';
    return `PROJECTS.${this.getProjectKey(project.id)}.TITLE`;
  }

  getProjectDescription(project: Project | undefined): string {
    if (!project) return '';
    return `PROJECTS.${this.getProjectKey(project.id)}.DESCRIPTION`;
  }

  private getProjectKey(projectId: number): string {
    // Mapping von Project-ID zu JSON-Key
    const projectKeyMap: { [key: number]: string } = {
      1: 'JOIN',
      2: 'ELPOLLOLOCOGAME',
      3: 'DABUBBLE',
    };
    
    return projectKeyMap[projectId] || `PROJECT_${projectId}`;
  }

  openProjectDetails(item: ProjectItem) {
    if (item.project) {
      this.projectDataService.setCurrentProject(item.project);
      this.router.navigate(['/project', item.project.id]);
    }
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
