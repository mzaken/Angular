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
      oldPassword : new FormControl('', Validators.required, PasswordValidation.validateOldPassword),
      newPassword : new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required)
    }, PasswordValidation.validateConfirmAndNewPassword);
  }

  get oldPassword() {
    return this.renewPasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.renewPasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.renewPasswordForm.get('confirmPassword');
  }

  submitForm(form) {
    console.log(form.value);
  }
}
