import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  projects: any[] = [];
  carouselImages: string[] = [];
  showCarousel: boolean = false;

  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = this.projectService.getProjectsInfo();
  }

  // Redirige vers une page de test quand on clique sur un projet
  onClickProject(project: any): void {
    if (project.type === 'carousel') {
      this.openCarousel(project.images);  // Affiche le carrousel avec les images du projet selectionné
    } else if (project.type === 'external') {
      window.open(project.externalUrl, '_blank');  // Ouvre un lien externe
    } else if (project.type === 'details') {
      this.router.navigate(['/projects', project.id]);  // Redirige vers la page détails du projet selectionné
    }
  }

  openCarousel(images: string[]): void {
    this.carouselImages = images;
    this.showCarousel = true;
  }

  closeCarousel(): void {
    this.showCarousel = false;
  }

}