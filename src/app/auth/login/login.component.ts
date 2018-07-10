import { Component, OnInit } from '@angular/core';
import { LocalSettings } from '../../../environments/environment.local.properties';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginImage:string;
  loginForm:FormGroup;

  constructor(private localSettings:LocalSettings,
              private fb:FormBuilder){
      this.loginImage = localSettings.LOGIN.LOGIN_IMAGE;

      this.loginForm = fb.group({
               userName:['',Validators.compose([Validators.required])],
               password:['',Validators.compose([Validators.required])]
      });

  }

  doLogin(loginFormData){
     console.log(loginFormData);
  }

  ngOnInit() {
  }

}
