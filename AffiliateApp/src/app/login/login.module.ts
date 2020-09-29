import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/forms/login/login.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ForgotPasswordComponent } from './components/forms/forgot-password/forgot-password.component';



@NgModule({
  declarations: [LoginComponent, LoginRegisterComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
