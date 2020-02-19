import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CoursesComponent,
    FavoriteIconComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor() {
    //library.add(faStar);
  }

}
