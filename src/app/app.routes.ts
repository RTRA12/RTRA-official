import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FullDetailComponent } from './pages/full-detail/full-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'events', component: EventsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'event-detail/:eventId', component: FullDetailComponent},
    {path: '**', component: ErrorPageComponent}
];
