import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { ExecisesComponent } from './execises/execises.component';

// Services
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';

// Pipes
import { SummaryPipe } from './summary.pipe';
import { PrepositionPipe } from './preposition.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

// <--- NgModule decorator
@NgModule({
  // <--- register modules
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    // register services
    CoursesService,
    AuthorsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
