import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  email = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formSignIn) {
    console.log(formSignIn.value);
  }
}
