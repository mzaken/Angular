import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadRequestError } from 'src/app/common/bad-request-error';

export class DataService<T> {
  
  constructor(private url: string, private http: HttpClient) {}
  
  getAll() {
    return this.http.get<T[]>(this.url)
            .pipe(
                catchError(this.handleError));
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
      return throwError(new NotFoundError(error));

    if (error.status === 400) 
      return throwError(new BadRequestError(error));

    return throwError(new AppError(error));
  }
}
