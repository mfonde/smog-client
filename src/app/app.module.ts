//? ANGULAR MODULES 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
//? SERVICES 
import { DatabaseService } from './services/database.service';
//? ANGULAR MATERIAL MODULES 
import {
  MatButtonModule,
  MatInputModule,
  MatExpansionModule

} from '@angular/material';
//? COMPONENTS OF THE ANGULAR APP 
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { MovieComponent } from  '../app/components/movie/movie.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
@NgModule({
  //TODO: DECLARES ALL OF THE COMPONENTS ADDED INTO THE APP MODULE 
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ReviewsComponent
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
    MatExpansionModule

  ],
  //TODO: PROVIDERS HOLD THE SERVICES USED BY THE APP, AND ANY ERROR INTERCEPTORS REQUIRED 
  providers: [DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
