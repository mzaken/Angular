import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  
  private authors : string[];
  
  constructor(authorService: AuthorService) { 
    this.authors = authorService.getAuthors();
  }

  ngOnInit(): void {
  }

  getAuthors() {
    return this.authors;
  }

}
