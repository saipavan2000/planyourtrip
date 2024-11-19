import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/ADMIN/dashboard/dashboard.component';
import { TripPackagesComponent } from './pages/ADMIN/trip-packages/trip-packages.component';
import { WelcomeComponent } from './pages/ADMIN/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/USER/user-dashboard/user-dashboard.component';
import { UserTripPackagesComponent } from './pages/USER/user-trip-packages/user-trip-packages.component';
import { UserwelcomeComponent } from './pages/USER/userwelcome/userwelcome.component';
import { YourtripsComponent } from './pages/USER/yourtrips/yourtrips.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'packages',
        component:TripPackagesComponent,
      },
    ]
  },
  {
    path:'user',
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'',
        component:UserwelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'packages',
        component:UserTripPackagesComponent,
      },
      {
        path:'yourtrips',
        component:YourtripsComponent,
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
