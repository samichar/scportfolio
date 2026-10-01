import { Routes } from '@angular/router';
import { HomePage } from './homepage/homepage';
import { PersonalProjects } from './personalprojects/personalprojects';
import { SchoolProjects } from './schoolprojects/schoolprojects';
import { Conferences } from './conferences/conferences';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePage },
  { path: 'personalprojects', component: PersonalProjects },
  { path: 'schoolprojects', component: SchoolProjects },
  { path: 'conferences', component: Conferences },
  { path: '**', redirectTo: 'homepage' },
];
