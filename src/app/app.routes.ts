import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';


const appRoutes:Routes = [
    {
        path:"auth",
        loadChildren:"./auth/auth.module#AuthModule",
        
    },
    {
        path:"profile",
        loadChildren:"./profile/profile.module#ProfileModule"
    },
    {
        path:"admin",
        loadChildren:"./admin-panel/admin-panel.module#AdminPanelModule"
    },
    {
        path:"",
        redirectTo:"auth",
        pathMatch: 'full'
    }
]

export const appRoutesProvider:ModuleWithProviders = RouterModule.forRoot(appRoutes);