import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LocalSettings } from '../../environments/environment.local.properties';
import { AuthRouterModule } from './auth.routes';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRouterModule
  ],
  declarations: [LoginComponent, SignupComponent],
  exports:[LoginComponent],
  providers:[LocalSettings]
})
export class AuthModule { }