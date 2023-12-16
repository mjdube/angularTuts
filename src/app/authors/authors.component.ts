import { Component } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  authors: string[];
  numberOfAuthors: number;

  constructor(authors: AuthorsService) {
    this.authors = authors.getAuthors();
    this.numberOfAuthors = authors.getNumberOfAuthors();
  }
}
