import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';


const profileRoutes:Routes = [
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:"**",
        redirectTo:"dashboard"
    }
];

export const profileRoutesProvider:ModuleWithProviders = RouterModule.forChild(profileRoutes);