import { Post } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'services/posts.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private service: PostsService) { }
  
  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response;
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { 
      title: input.value,
      id: null,
      userId: null,
      body: null };
    this.posts.splice(0, 0, post);
    
    input.value = '';
  
    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response.id;
        }, 
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadRequestError) {
            // bad request error msg
          }
          else throw error;
      });
  }

  deletePost(post: Post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);      
    
    this.service.delete(post.id)
    .subscribe(
      null, 
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError)
          alert('This post has already been deleted.')
        else throw error;
      });
  }
}
