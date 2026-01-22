import { Routes } from '@angular/router';
import { Book } from './book/book';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'book',component:Book},
    {path:'home',component:Home},
    {path:'contact',component:Contact}
];
