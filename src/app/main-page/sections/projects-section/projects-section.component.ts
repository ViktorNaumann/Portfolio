import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectItem {
  type: 'header' | 'project';
  title?: string;
  description?: string;
  imageUrl?: string;
  featured?: boolean;
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
      imageUrl: '/assets/img/projects/Laptop.svg',
      featured: true 
    },
    {
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: '/assets/img/projects/Property 1=El Pollo Loco.svg',
      featured: false
    },
    {
      title: 'Project 3',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      imageUrl: '/assets/img/projects/DABubble.svg',
      featured: false
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

  openProjectDetails(project: any) {
   
    console.log('Opening details for:', project.title);

  }
}
