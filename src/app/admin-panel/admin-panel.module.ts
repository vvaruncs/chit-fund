import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateChitGroupComponent } from './create-chit-group/create-chit-group.component';
import { AdminRoutes } from './admin-panel.routes';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes,
    BsDropdownModule.forRoot()
  ],
  declarations: [CreateChitGroupComponent]
})
export class AdminPanelModule { }
