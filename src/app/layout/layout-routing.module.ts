import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../External/pagenotfound/pagenotfound.component';


import { LayoutComponent } from './layout.component';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { OverviewComponent } from './overview/overview.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component:LayoutComponent, children:[
    {path:'overview',component:OverviewComponent},
    {path:'user-profile',component:UserProfileComponent},
    
    {path:'**',component:PagenotfoundComponent}
  ]},
  
  // {path:'myprofile',component:MyprofileComponent},
 // {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
