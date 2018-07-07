import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';


const appRoutes:Routes = [
    {
        path:"",
        loadChildren:"./auth/auth.module#AuthModule"
    },
    {
        path:"profile",
        loadChildren:"./profile/profile.module#ProfileModule"
    },
    {
        path:"**",
        redirectTo:"login"
    }
]

export const appRoutesProvider:ModuleWithProviders = RouterModule.forRoot(appRoutes);