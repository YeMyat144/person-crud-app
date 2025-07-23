import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">PersonApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/people" >People</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/about">About</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<div class="m-4">
   <router-outlet /> 
   <!-- content page -->
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}