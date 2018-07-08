import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const authRoutes:Routes= [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"",
        redirectTo:"login",
        pathMatch: 'full'
    }
];

export const AuthRouterModule:ModuleWithProviders = RouterModule.forChild(authRoutes);