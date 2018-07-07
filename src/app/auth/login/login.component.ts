import { Component, OnInit } from '@angular/core';
import { LocalSettings } from '../../../environments/environment.local.properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginImage:string;
  
  constructor(private localSettings:LocalSettings){
      this.loginImage = localSettings.LOGIN.LOGIN_IMAGE;
  }

  ngOnInit() {
  }

}
