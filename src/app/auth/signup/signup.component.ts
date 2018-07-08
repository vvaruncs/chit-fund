import { LocalSettings } from '../../../environments/environment.local.properties';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupImage:string;

  constructor(private localSettings:LocalSettings) { 
    this.signupImage = localSettings.SIGNUP.SIGNUP_IMAGE;
  }

  ngOnInit() {
  }

}
