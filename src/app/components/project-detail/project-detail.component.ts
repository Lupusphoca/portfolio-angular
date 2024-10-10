import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    // Récupération de l'ID du projet dans l'URL
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProjects().find(p => p.id === projectId);
  }
}