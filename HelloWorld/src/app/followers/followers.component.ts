import { Component, OnInit } from '@angular/core';
import { Follower, FollowersService } from 'services/followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers : Follower[];
  
  constructor(private service: FollowersService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
