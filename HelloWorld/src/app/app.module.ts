import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { LikeComponent } from './like/like.component';
import { SomethingComponent } from './something/something.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CoursesComponent,
    FavoriteIconComponent,
    LikeComponent,
    SomethingComponent,
    UserItemComponent,
    ZippyComponent,
    CourseFormComponent,
    PasswordChangeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor() {
    //library.add(faStar);
  }

}
