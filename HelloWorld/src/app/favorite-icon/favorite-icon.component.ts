import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  template: `
    <span class="bi bi-star">
  `,
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  private isSelected : boolean
  constructor() {

  }

  ngOnInit(): void {
    
  }

}
