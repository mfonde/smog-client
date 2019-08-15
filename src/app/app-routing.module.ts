import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from '../app/components/movie/movie.component';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { BestiesComponent } from './components/profile/besties/besties.component';
import { BestiesDetailComponent } from './components/profile/besties/besties-detail/besties-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'besties', component: BestiesComponent, children: [
    {path: ':username', component: BestiesDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
