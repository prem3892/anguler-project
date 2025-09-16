import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [

    {
        path:"",
        title:"home page",
        component:Home
    },

    {
        path:"about",
        title:"about page",
        component:About
    },
    {
        path:"contact",
        title:"contact page",
        component:Contact
    }
  
];
