import { Component, OnInit } from '@angular/core';
import { PostsService } from 'services/posts.service';
import { R3ResolvedDependencyType } from '@angular/compiler';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostsService) { }
  
  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      })
  }

}
