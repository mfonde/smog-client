import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from '../app/components/movie/movie.component';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
