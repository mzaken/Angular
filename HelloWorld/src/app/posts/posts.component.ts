import { Post } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'services/posts.service';
import { R3ResolvedDependencyType } from '@angular/compiler';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private service: PostsService) { }
  
  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      })
  }

  addPost(input: HTMLInputElement) {
    let post = { 
      title: input.value,
      id: null,
      userId: null,
      body: null };
    
    input.value = '';
  
    this.service.createPost(post)
      .subscribe(response => {
        this.posts.splice(0, 0, post);
      });
  }

  deletePost(post: Post) {
    let index = this.posts.indexOf(post);

    this.service.deletePost(post).subscribe(response => {
      this.posts.splice(index, 1);      
    })
  }
}
