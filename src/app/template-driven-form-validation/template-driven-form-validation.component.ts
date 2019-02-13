import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-validation',
  templateUrl: './template-driven-form-validation.component.html',
  styleUrls: ['./template-driven-form-validation.component.scss']
})
export class TemplateDrivenFormValidationComponent implements OnInit {
  email = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formSignIn) {
    console.log(formSignIn.value);
  }
}
