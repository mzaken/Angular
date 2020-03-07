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

export class DataService<T> {
  
  constructor(private url: string, private http: HttpClient) {}
  
  getAll() {
    return this.http.get<T[]>(this.url);
  }

  create(resource) {
    return this.http.post<T>(this.url, JSON.stringify(resource))
            .pipe(
              catchError(this.handleError));
  }
  
  update(resource) {
      return this.http.patch<T>(this.url + '/' + resource.id, resource)
        .pipe(
            catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
            .pipe(
              catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) 
      return Observable.throw(new NotFoundError(error));

    if (error.status === 400) 
      return Observable.throw(new BadRequestError(error));

    return Observable.throw(new AppError(error));
  }
}
