//? ANGULAR MODULES 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NewReviewDialog } from '../app/components/movie/movie.component'
//? SERVICES 
import { DatabaseService } from './services/database.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
//? ANGULAR MATERIAL MODULES 
import {
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTableModule,
  MatCardModule

} from '@angular/material';

import {
  MatDialogModule
} from '@angular/material/dialog';


//? COMPONENTS OF THE ANGULAR APP 
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { MovieComponent } from '../app/components/movie/movie.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateReviewComponent } from './components/reviews/create-review/create-review.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { UserSearchComponent } from './components/auth/admin/user-search/user-search.component';
import { ReviewSearchComponent } from './components/auth/admin/review-search/review-search.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthHeaderComponent } from './components/header/auth-header/auth-header.component';
@NgModule({
  //TODO: DECLARES ALL OF THE COMPONENTS ADDED INTO THE APP MODULE 
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ReviewsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CreateReviewComponent,
    NewReviewDialog,
    AdminComponent,
    UserSearchComponent,
    ReviewSearchComponent,
    HeaderComponent,
    AuthHeaderComponent
  ],

  entryComponents:[
    NewReviewDialog,
    AdminComponent,
    UserSearchComponent,
    ReviewSearchComponent,
    HeaderComponent,
    AuthHeaderComponent
  ],
  //TODO: HOLDS ALL OF THE IMPORTS ADDED TO THE ANGULAR APP FOR OTHER FILES TO USE 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule

  ],
  //TODO: PROVIDERS HOLD THE SERVICES USED BY THE APP, AND ANY ERROR INTERCEPTORS REQUIRED 
  providers: [DatabaseService, UserService, AuthService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
