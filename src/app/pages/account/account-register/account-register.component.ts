import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AccountListDataService } from '../account-list-data.service';

@Component({
  selector: 'account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss']
})
export class AccountRegisterComponent implements OnInit {
  public options = this.api.getOptions();
  public registerForm: FormGroup;

  constructor( private api: AccountListDataService ) {
      this.registerForm = new FormGroup({
          'fullName':     new FormControl('', [ Validators.required, Validators.minLength(4) ]),
          'email':        new FormControl('', [Validators.required, Validators.email ]),
          'password':     new FormControl('', [Validators.required , Validators.minLength(8)]),
          'passwordConfirm':  new FormControl('', [Validators.required , Validators.minLength(8)]),
          'role':     new FormControl(null, [Validators.required])
      });
  }

  ngOnInit() { }

  get fullName() { return this.registerForm.get('fullName'); }

  get passwordConfirm() {
      const pass = this.registerForm.get('password');
      return pass.value != this.registerForm.get('passwordConfirm').value;
  }

  get role() { return this.registerForm.get('role'); }

  get validateForm() {
      // This will return validation for submit form.
      return (!this.passwordConfirm && this.registerForm.valid);
  }
}
