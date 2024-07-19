import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FullDetailComponent } from './pages/full-detail/full-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'events', component: EventsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'event-detail/:eventId', component: FullDetailComponent},
    {path: '**', component: ErrorPageComponent}
];
