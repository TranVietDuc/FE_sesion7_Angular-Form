import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {passwordnotmatch: true};
}

@Component({
    selector: 'app-reactive-form-builder',
    templateUrl: './reactive-form-builder.component.html',
    styleUrls: ['./reactive-form-builder.component.scss']
  })
  export class ReactiveFormBuilderComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private fBuilder: FormBuilder) {
    }


    ngOnInit() {
      this.registerForm = this.fBuilder.group({
        email: ['', [Validators.required, Validators.email]],

        pwGroup: this.fBuilder.group({
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        }, {validator: comparePassword}),
        country: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(18)]],
        gender: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
      });
      this.registerForm.patchValue({
        email: 'info@example.com'
      });
    }

    onSubmit() {
      console.log(this.registerForm);
    }

  }

