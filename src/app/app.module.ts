//? ANGULAR MODULES 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
  MatCardModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
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
import { HeaderComponent } from './components/header/header.component';
import { AuthHeaderComponent } from './components/header/auth-header/auth-header.component';
import { BestiesComponent } from './components/profile/besties/besties.component';
import { ReviewItemComponent } from './components/reviews/review-item/review-item.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoriteItemComponent } from './components/favorites/favorite-item/favorite-item.component';
import { NewReviewDialog } from '../app/components/movie/movie.component';
import { FavoriteDialog } from '../app/components/movie/movie.component';

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
    HeaderComponent,
    AuthHeaderComponent,
    BestiesComponent,
    ReviewItemComponent,
    FavoritesComponent,
    FavoriteItemComponent,
    FavoriteDialog
  ],
  entryComponents: [
    NewReviewDialog,
    AdminComponent,
    UserSearchComponent,
    HeaderComponent,
    AuthHeaderComponent,
    FavoriteDialog
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
    MatCardModule,
    NgbModule,
    MatCardModule
  ],
  //TODO: PROVIDERS HOLD THE SERVICES USED BY THE APP, AND ANY ERROR INTERCEPTORS REQUIRED 
  providers: [DatabaseService, UserService, AuthService, HttpClient, NgbRatingConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
