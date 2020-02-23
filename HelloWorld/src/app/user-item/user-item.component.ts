import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  text: string = "";
  rand: number;

  onChange(event) {
    this.text = event.target.value;
  }

  generateRandomNum() {
    this.rand = Math.round(Math.random() * 100);
  }
}
