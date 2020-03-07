import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService<Post> {
  
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts' , http);
  }
}
