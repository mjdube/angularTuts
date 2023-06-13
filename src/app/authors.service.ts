import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authors = ["Mlungisi", "Mpumelelo", "Lucy", "Jury"]

  constructor() { }

  getAuthors(){
    return this.authors
  }

  getNumberOfAuthors(){
    return this.authors.length
  }
}
