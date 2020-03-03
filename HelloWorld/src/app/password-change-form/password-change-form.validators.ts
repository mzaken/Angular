import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidation {

    static validateOldPassword(control: FormControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value != 1234) {
                    resolve({validateOldPassword: true})
                } 
                else 
                    resolve(null);
              }, 2000);
        });
    }

    static validateConfirmAndNewPassword(control: FormGroup) : ValidationErrors | null {
        let newPass = control.get('newPass').value;
        let confirmPass = control.get('confirm').value;
        
        if (newPass != confirmPass) {
            return {validateConfirmAndNewPassword : true};
        }

        return null;
    }
}