import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  
  private authors : string[];
  
  constructor(authorService: AuthorsService) { 
    this.authors = authorService.getAuthors();
  }

  ngOnInit(): void {
  }

  getAuthors() {
    return this.authors;
  }

}