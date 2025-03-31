import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];
