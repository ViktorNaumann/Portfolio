import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectItem {
  type: 'header' | 'project';
  title?: string;
  description?: string;
  imageUrl?: string;
}
  
@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
  projects = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageUrl: '/assets/img/projects/Laptop.png'
    },
    {
      title: 'Project 2',
      description: 'Beschreibung des zweiten Projekts.',
      imageUrl: '/assets/img/projects/28_Project thumbnails.png'
    },
    {
      title: 'Project 3',
      description: 'Beschreibung des dritten Projekts.',
      imageUrl: '/assets/img/projects/DABubble.png'
    }
  ];

  get projectsWithHeader(): ProjectItem[] {
    const headerItem: ProjectItem = { type: 'header' };
    const projectItems: ProjectItem[] = this.projects.map(project => ({
      type: 'project' as const,
      ...project
    }));
    
    return [headerItem, ...projectItems];
  }
}
