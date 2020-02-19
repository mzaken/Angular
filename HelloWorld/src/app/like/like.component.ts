import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @input('like') isLiked : boolean;
  @input('counter')counter: number;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    isLiked ? counter-- : counter ++;
    isLiked = !isLiked
  }
}
