import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

// Services
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';

@NgModule({
  // <--- decorator
  declarations: [
    // <---
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
