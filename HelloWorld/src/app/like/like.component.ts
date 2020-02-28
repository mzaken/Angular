import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive') isActive : boolean;

  @Input('likesCounter') likesCounter: number;

  onClick() {
    this.isActive ? this.likesCounter-- : this.likesCounter ++;
    this.isActive = !this.isActive
  }
}
