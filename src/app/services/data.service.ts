import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor() {}
}
