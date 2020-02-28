import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  title = 'some title';
  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
