import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" routerLink="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-people-fill me-2" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
          </svg>
          <span class="fw-bold">Person CRUD App</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" 
                 routerLinkActive="active" 
                 [routerLinkActiveOptions]="{exact: true}"
                 routerLink="/people">
                <span class="nav-link-inner">People</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
                 routerLinkActive="active" 
                 [routerLinkActiveOptions]="{exact: true}"
                 routerLink="/about">
                <span class="nav-link-inner">About</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container py-4 animate-fade-in">
      <router-outlet></router-outlet>
    </main>

  `,
  styles: [`
    .navbar {
      padding: 1rem 0;
      transition: all 0.3s ease;
    }
    
    .navbar-brand {
      font-size: 1.5rem;
      transition: transform 0.3s ease;
    }
    
    .navbar-brand:hover {
      transform: scale(1.05);
    }
    
    .nav-link {
      position: relative;
      margin: 0 0.5rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85) !important;
      transition: all 0.3s ease;
    }
    
    .nav-link:hover {
      color: white !important;
    }
    
    .nav-link.active {
      color: white !important;
      font-weight: 600;
    }
    
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: white;
      border-radius: 3px;
      animation: underline 0.3s ease forwards;
    }
    
    .nav-link-inner {
      position: relative;
      z-index: 1;
    }
    
    @keyframes underline {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  currentYear = new Date().getFullYear();
}