import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    // Liste de projets simulée
    getProjects() {
        return [
            {
                id: 1,
                name: 'Projet 1',
                date: 'Janvier 2023',
                imageUrl: 'assets/images/project1.jpg',
                format: '16:9'
            },
            {
                id: 2,
                name: 'Projet 2',
                date: 'Mars 2023',
                imageUrl: 'assets/images/project2.jpg',
                format: '9:16'
            },
            {
                id: 3,
                name: 'Projet 3',
                date: 'Avril 2023',
                imageUrl: 'assets/images/project3.jpg',
                format: '16:9'
            }
            // Ajoute d'autres projets ici...
        ];
    }
}