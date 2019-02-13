import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignInFirstComponent } from './sign-in-first/sign-in-first.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenFormValidationComponent } from './template-driven-form-validation/template-driven-form-validation.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SignInFirstComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormValidationComponent,
    RegisterComponent,
    ReactiveFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
