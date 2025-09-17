import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [

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
