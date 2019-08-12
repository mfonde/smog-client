import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from '../app/components/movie/movie.component';
import { HomeComponent } from '../app/components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
