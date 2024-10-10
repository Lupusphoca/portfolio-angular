import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],  // Ajout de CommonModule ici
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  projects: any[] = [];

  constructor(private projectService: ProjectService, private router: Router) {
    // Récupérer la liste des projets depuis le service
    this.projects = this.projectService.getProjects();
  }

  // Redirige vers une page de test quand on clique sur un projet
  onClickProject(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }
}