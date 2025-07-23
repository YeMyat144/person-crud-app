import { Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
    {
        path: 'people',
        component: PersonComponent
    },
    {
        path: 'about',
        loadComponent: () => import('./about.component').then(a => a.AboutComponent)    
    },
    {
        path: '',
        redirectTo: '/people',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./not-found.component').then(n => n.NotFoundComponent)
    }
];
