import { Component, OnInit } from '@angular/core';
//import { faStar as fasStar} from '@fortawesome/free-regular-svg-icons';
//import { faStar as farStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  private isFavorite : boolean
  //faStar = 
  constructor() {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
