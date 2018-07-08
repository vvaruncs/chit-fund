import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AddUsersComponent } from "./add-users/add-users.component";

const adminRoutes:Routes=[
    {
        path:"adduser",
        component:AddUsersComponent
    },
    {
        path:"",
        redirectTo:"adduser",
        pathMatch: 'full'
    }
];

export const AdminRoutes:ModuleWithProviders = RouterModule.forChild(adminRoutes);