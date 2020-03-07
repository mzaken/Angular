import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadRequestError } from 'src/app/common/bad-request-error';

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
    return this.http.post<Post>(this.url, JSON.stringify(post))
            .pipe(
              catchError((error: Response) => {
                if (error.status === 404)
                  return Observable.throw(new BadRequestError(error.json()));
                
                return Observable.throw(new AppError(error.json()));
              }));
  }
  
  deletePost(postId: number) {
    return this.http.delete(this.url + '/' + postId)
            .pipe(
              catchError((error: Response) => {
                if (error.status === 404) 
                  return Observable.throw(new NotFoundError(error));

                return Observable.throw(new AppError(error));
              }));
            
  }
}
