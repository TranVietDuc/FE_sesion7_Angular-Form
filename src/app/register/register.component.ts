import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {passwordnotmatch: true};
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

        pwGroup: new FormGroup({
          password: new FormControl('', [Validators.required, Validators.minLength(6)]),
          confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        }, comparePassword),

      country: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
    });
  }
   onSubmit(registerForm) {
    console.log(registerForm);
   }


}
