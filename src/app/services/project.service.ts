import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projectPath : string = 'assets/projects/';
    constructor(private http: HttpClient){}

    getProjectsData(projectName: string): Observable<any>{
        const filePath = `/assets/data/${projectName}-data.json`;
        return this.http.get(filePath).pipe(
            catchError((error) => {
                console.error(`Erreur lors du chargement du projet ${projectName}:`, error);
                throw error;
            })
        )
    }

    getProjectsInfo() {
        return [
            {
                id: 'rushline',
                name: 'Rushline : Hikokawa Ascend',
                note: "Jeu en VR (Réalité Virtuelle) de 4v4 développé pour une salle d'arcade.",
                imageUrl: this.projectPath + 'rushline/rushline-title.png',
                type: 'details',
                case: 2
            },
            {
                id: 'psx',
                name: 'PSX - World of Darkness',
                note: "Jeu de tir et d'enquête dans l'univers sombre et oppressant du Monde des Ténèbres.",
                imageUrl: 'assets/projects/psx/psx-title.png',
                type: 'details',
                case: 1
            },
            {
                id: 'photo',
                name: '📷',
                note: 'Aperçu exhaustif de mes réalisations et retouches photo.',
                imageUrl: this.projectPath + 'photos/me.jpg',
                type: 'carousel',
                case: 1,
                images: [
                    'assets/projects/photos/destroyed-car-3.jpg',
                    'assets/projects/photos/destroyed-car-2.jpg',
                    'assets/projects/photos/lamppost.jpg',
                    'assets/projects/photos/night-graveyard.jpg',
                    'assets/projects/photos/church-alley.jpg',
                    'assets/projects/photos/holy-cross.jpg',
                    'assets/projects/photos/swan-2.jpg',
                    'assets/projects/photos/umbrellas.jpg',
                ]
            },
            {
                id: 'alice',
                name: 'Alice - 90 seconds left',
                note: "Jeu d'enquête et d'exploration dans lequel Alice possède 90 secondes pour se sortir de cette boucle.",
                imageUrl: this.projectPath + 'alice/alice-title.png',
                type: 'details',
                case: 1
            },
            {
                id: 'sesame',
                name: 'Sesame Street Numbers',
                note: "Jeu éducatif pour apprendre aux enfants de 3 à 5 ans à compter.",
                imageUrl: this.projectPath + 'sesame/sesame-title.jpg',
                type: 'details',
                case: 2
            },
            {
                id: 'ffitv',
                name: 'Flowers into the void',
                note: "",
                imageUrl: this.projectPath + 'ffitv/ffitv-title.png',
                type: 'external',
                case: 1
            },
            {
                id: 'solid',
                name: 'S.O.L.I.D - Framework de développement sur Unity 3D',
                note: "Framework personnalisé pour le développement d'application sur le logiciel Unity 3D",
                imageUrl: this.projectPath + 'solid/solid-title.png',
                type: 'details',
                case: 2
            },
            {
                id: 'irc',
                name: 'IRC Twitch Chat',
                note: "...",
                imageUrl: this.projectPath + 'irc/irc-title.png',
                type: 'details',
                case: 2
            },
            {
                id: 'lmeen',
                name: '📕 La Mariée était en Noir',
                note: '2020 - Livre scénario pour le jeu de rôle Vampire la Mascarade',
                imageUrl: this.projectPath + 'vtm/LMEEN.png',
                type: 'external',
                externalUrl: 'https://www.storytellersvault.com/product/477858/La-Mariee-etait-en-Noir--Le-Roi-Dechu',
                case: 1,
            },
            {
                id: 'lpf',
                name: '📕 La Psychose Familial',
                note: '2021 - Livre scénario pour le jeu de rôle Vampire la Mascarade',
                imageUrl: this.projectPath + 'vtm/LPF.png',
                type: 'external',
                externalUrl: 'https://www.storytellersvault.com/product/477862/La-Psychose-Familiale--Le-Roi-Dechu',
                case: 1,
            },
            {
                id: 'ller',
                name: '📕 La Lune est Rouge',
                note: '2022 - Livre scénario pour le jeu de rôle Vampire la Mascarade',
                imageUrl: this.projectPath + 'vtm/LLER.png',
                type: 'external',
                externalUrl: 'https://www.storytellersvault.com/product/477864/La-Lune-est-Rouge--Le-Roi-Dechu',
                case: 1,
            },
            {
                id: 'lpdbv',
                name: '📕 La Pierre des Bons Vents',
                note: '2023 - Livre scénario pour le jeu de rôle Vampire la Mascarade',
                imageUrl: this.projectPath + 'vtm/LPDBV.png',
                type: 'external',
                externalUrl: 'https://www.storytellersvault.com/product/477867/La-Pierre-des-Bons-Vents--Le-Roi-Dechu',
                case: 1,
            },
            {
                id: 'corrompu',
                name: 'Corrumpu',
                note: "Prenez peur ou domptez votre phobie, mais n'y voyez pas là un moyen de vous sortir de votre condition...",
                imageUrl: this.projectPath + 'corrompu/corrompu-title.png',
                type: 'details',
                case: 1
            },
        ];
    }
}