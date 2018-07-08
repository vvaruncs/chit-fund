import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { AdminRoutes } from './admin-panel.routes';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    BsDropdownModule.forRoot()
  ],
  declarations: [AddUsersComponent]
})
export class AdminPanelModule { }
