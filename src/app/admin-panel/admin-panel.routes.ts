import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CreateChitGroupComponent } from './create-chit-group/create-chit-group.component';

const adminRoutes:Routes=[
    {
        path:"createchitgroup",
        component:CreateChitGroupComponent
    },
    {
        path:"**",
        redirectTo:"createchitgroup"
    }
];

export const AdminRoutes:ModuleWithProviders = RouterModule.forChild(adminRoutes);