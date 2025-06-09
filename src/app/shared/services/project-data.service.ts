import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  duration?: string;
  technologies: string[];
  implementationDetails?: string;
  githubUrl?: string;
  liveTestUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageUrl: '/assets/img/projects/Laptop.svg',
      featured: true,
      duration: '4 weeks',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      implementationDetails: 'Entwicklung eines Task-Management-Systems mit Drag-and-Drop-Funktionalität. Implementierung von Benutzerauthentifizierung, Kategorisierung und kollaborativen Features für Teamarbeit.',
      githubUrl: 'https://github.com/username/join',
      liveTestUrl: 'https://join-app.com'
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: '/assets/img/projects/Property 1=El Pollo Loco.svg',
      featured: false,
      duration: '3 weeks',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      implementationDetails: 'Entwicklung eines 2D-Plattformspiels mit objektorientiertem JavaScript. Implementierung von Spielphysik, Kollisionserkennung, Sound-Management und responsivem Game-Design.',
      githubUrl: 'https://github.com/username/el-pollo-loco',
      liveTestUrl: 'https://el-pollo-loco.com'
    },
    {
      id: 3,
      title: 'DABubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      imageUrl: '/assets/img/projects/DABubble.svg',
      featured: false,
      duration: '4 weeks',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      implementationDetails: 'Entwicklung einer umfassenden Kommunikationsplattform mit Echtzeit-Messaging, Kanal-Management und Benutzerauthentifizierung. Integration von Firebase für Backend-Services.',
      githubUrl: 'https://github.com/username/dabubble',
      liveTestUrl: 'https://dabubble.com'
    }
  ];

  private currentProjectSubject = new BehaviorSubject<Project | null>(null);
  public currentProject$ = this.currentProjectSubject.asObservable();

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  setCurrentProject(project: Project): void {
    this.currentProjectSubject.next(project);
  }

  getNextProject(currentId: number): Project | null {
    const currentIndex = this.projects.findIndex(p => p.id === currentId);
    if (currentIndex === -1) return null;
    
    const nextIndex = (currentIndex + 1) % this.projects.length;
    return this.projects[nextIndex];
  }

  constructor() { }
}
