import { LocalSettings } from './../../../environments/environment.local.properties';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-chit-group',
  templateUrl: './create-chit-group.component.html',
  styleUrls: ['./create-chit-group.component.css']
})
export class CreateChitGroupComponent implements OnInit {

  crateChitPoolImg:string;

  constructor(private localSettings:LocalSettings) { 
    this.crateChitPoolImg = localSettings.CREATECHITGROUP.CHIT_GROUP_IMAGE;
  }

  ngOnInit() {
  }

}
