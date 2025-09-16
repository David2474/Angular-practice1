import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'counter', component: CounterPageComponent},
    {path: '**', redirectTo: ''}
];
