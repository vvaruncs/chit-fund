import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalSettings } from '../../../environments/environment.local.properties';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupImage:string;
  signupForm:FormGroup;

  constructor(private localSettings:LocalSettings,
              private fb:FormBuilder) { 
    this.signupImage = localSettings.SIGNUP.SIGNUP_IMAGE;

    this.signupForm = this.fb.group({
      firstName:["",Validators.compose([Validators.required])],
      lastName:["",Validators.compose([Validators.required])],
      address:["",Validators.compose([Validators.required])],
      emailaddress:["",Validators.compose([Validators.required])],
      phoneNumber:["",Validators.compose([Validators.required])],
      age:["",Validators.compose([Validators.required])],
      gender:["0",Validators.compose([Validators.required])],
      income:["",Validators.compose([Validators.required])]
    })

  }

  ngOnInit() {
  }

}
