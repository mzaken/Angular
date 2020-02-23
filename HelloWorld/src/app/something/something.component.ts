import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {

  isDisabled = false;
  text = "";
  img = "http://myimage.com/img1234.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
