import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserSpaceComponent } from './layout/user-space/user-space.component';
export const routes: Routes = [
    {
        path:'',component:UserLayoutComponent, children:[
            {path:'hello',loadChildren:()=> import('./views/user/login/login.module').then(m=> m.LoginModule)},
        ] },
        {
        path:'',component:UserSpaceComponent, children:[
                {path:'hi',loadChildren:()=> import('./views/user/user-space/user-space.module').then(m=> m.UserSpaceModule)},
            ] },

];
