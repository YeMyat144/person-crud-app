import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="about-container animate-fade-in">
      <div class="about-header text-center py-5">
        <div class="container">
          <h1 class="display-4 fw-bold mb-4">About PersonApp</h1>
          <p class="lead">Your simple, elegant solution for managing contacts</p>
        </div>
      </div>

      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="about-card shadow-sm p-4 h-100">
              <div class="icon-container mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                </svg>
              </div>
              <h3 class="mb-3">Our Mission</h3>
              <p>PersonApp was created to simplify contact management for individuals and small teams. We believe in intuitive design that just works.</p>
              <p>Our goal is to help you organize your contacts without unnecessary complexity or bloated features.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="about-card shadow-sm p-4 h-100">
              <div class="icon-container mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
                  <path d="M8 1a7 7 0 0 0-6.992 7.158A1 1 0 0 1 1.99 9h12.02a1 1 0 0 1 .992-1.842A7 7 0 0 0 8 1"/>
                </svg>
              </div>
              <h3 class="mb-3">Key Features</h3>
              <ul class="feature-list">
                <li>Simple contact management</li>
                <li>Clean, intuitive interface</li>
                <li>Fast and responsive</li>
                <li>Built with modern Angular</li>
                <li>100% free to use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: 100vh;
      background-color: #f8f9fa;
    }

    .about-header {
      background: linear-gradient(135deg, #198754, #138f55ff);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .about-header::after {
      content: '';
      position: absolute;
      bottom: -50px;
      left: 0;
      right: 0;
      height: 100px;
      background-color: #f8f9fa;
      transform: skewY(-2deg);
      z-index: 1;
    }

    .about-card {
      background: white;
      border-radius: 8px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .about-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
    }

    .icon-container {
      color: #198754;
      text-align: center;
    }

    .feature-list {
      list-style-type: none;
      padding-left: 0;
    }

    .feature-list li {
      padding: 8px 0;
      position: relative;
      padding-left: 30px;
    }

    .feature-list li::before {
      content: '✓';
      color: #198754;
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .about-header {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
      
      .about-header h1 {
        font-size: 2.2rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
}