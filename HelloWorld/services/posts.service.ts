import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) {}
  
  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  createPost(post: Post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  
  deletePost(post: Post) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
