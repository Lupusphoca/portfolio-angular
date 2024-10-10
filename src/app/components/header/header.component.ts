import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  // Redirection vers la page d'accueil
  onClickLogo(): void {
    this.router.navigate(['/']);
  }

  // Redirection vers la page "Expériences"
  onClickExperience(): void {
    this.router.navigate(['/experiences']);
  }

  // Redirection vers la page "Contact"
  onClickContact(): void {
    this.router.navigate(['/contact']);
  }
}