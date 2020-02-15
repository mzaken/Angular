import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
      <button class="btn btn-primary">Save</button>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
