import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: Home,
  },
  {
    path: 'about',
    title: 'about page',
    component: About,
  },
  {
    path: 'contact',
    title: 'contact page',
    component: Contact,
  },
];
