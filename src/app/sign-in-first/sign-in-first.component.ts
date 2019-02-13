import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-first',
  templateUrl: './sign-in-first.component.html',
  styleUrls: ['./sign-in-first.component.scss']
})
export class SignInFirstComponent implements OnInit {
 email='';
 password='';
 onSubmit(){
   console.log(this.email, this.password);
 }
  constructor() { }

  ngOnInit() {
  }

}
