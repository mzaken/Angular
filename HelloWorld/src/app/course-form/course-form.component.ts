import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categories = [
    {name: "Development", id: 1},
    {name: "Art", id: 2}, 
    {name: "Languages", id: 3}
  ]

  submit(f) {
    console.log(f.value);
  }

  log(x) {
    console.log(x);
  }
}
