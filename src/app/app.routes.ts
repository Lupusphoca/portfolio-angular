import { Routes } from '@angular/router';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

export const routes: Routes = [
    { path: '', component: ProjectListComponent }, // Page principale
    { path: 'experiences', component: ExperiencesComponent }, // Page expériences
    { path: 'projects/:id', component: ProjectDetailComponent }, // Page de détails du projet
];