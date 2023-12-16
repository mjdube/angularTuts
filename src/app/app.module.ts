import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { ExecisesComponent } from './execises/execises.component';

// Services
import { AuthorsService } from './services/authors.service';
import { CoursesService } from './services/courses.service';

// Pipes
import { SummaryPipe } from './summary.pipe';
import { PrepositionPipe } from './preposition.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { PostsService } from './services/posts.service';

// <--- NgModule decorator
@NgModule({
  // <--- register modules, pipe, directive to the application
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    ExecisesComponent,
    PrepositionPipe,
    FavouriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    FormContactComponent,
    SignupFormComponent,
    NewCourseComponent,
  ],
  // import Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  // register services
  providers: [CoursesService, AuthorsService, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
