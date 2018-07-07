import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { profileRoutesProvider } from './profile.routes';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    profileRoutesProvider,
    ChartsModule
  ],
  declarations: [DashboardComponent]
})
export class ProfileModule { }
