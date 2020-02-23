import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {

  text: string = "";

  onChange(event) {
    this.text = event.target.value;
  }
}
