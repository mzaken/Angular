import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './password-change-form.validators';

@Component({
  selector: 'password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent {
  renewPasswordForm: FormGroup;

  constructor() {
    this.renewPasswordForm = new FormGroup({
      old : new FormControl('', Validators.required, PasswordValidation.validateOldPassword),
      newPass : new FormControl('', Validators.required),
      confirm : new FormControl('', Validators.required)
    }, PasswordValidation.validateConfirmAndNewPassword);
  }

  get old() {
    return this.renewPasswordForm.get('old');
  }

  get newPass() {
    return this.renewPasswordForm.get('newPass');
  }

  get confirm() {
    return this.renewPasswordForm.get('confirm');
  }

  submitForm(form) {
    console.log(form.value);
  }
}
