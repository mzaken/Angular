import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent implements OnInit {
  form = new FormGroup( {

  })

  constructor() { }

  ngOnInit(): void {
  }

}
