import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserSpaceComponent } from './layout/user-space/user-space.component';
export const routes: Routes = [
    {
        path:'',component:UserLayoutComponent, children:[
            {path:'login',loadChildren:()=> import('./views/user/login/login.module').then(m=> m.LoginModule)},
            {path:'register',loadChildren:()=> import('./views/user/signup/signup.module').then(m=> m.SignupModule)},

        ] },
        {
        path:'',component:UserSpaceComponent, children:[
                {path:'dashboard',loadChildren:()=> import('./views/user/user-space/user-space.module').then(m=> m.UserSpaceModule)},
            ] },

];
