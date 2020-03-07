import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

export interface Follower {
  avatar_url: string;
  html_url: string;
  login: string;
}

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService<Follower>{

  constructor(http: HttpClient) { 
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
