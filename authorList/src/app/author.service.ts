import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService{
  
  private authors = ['Author1', 'Author2', 'Author3', 'Author4']

  constructor() { }

  getAuthors() {
    return this.authors;
  }
}
