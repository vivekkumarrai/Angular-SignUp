import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './External/home-page/home-page.component';
import { LoginComponent } from './External/login/login.component';
import { PagenotfoundComponent } from './External/pagenotfound/pagenotfound.component';
import { SignupComponent } from './External/signup/signup.component';
import { ViewDataComponent } from './External/view-data/view-data.component';
import { MyprofileComponent } from './layout/myprofile/myprofile.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'viewdata',component:ViewDataComponent},
  {path:'login',component:LoginComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'layout',loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
  // {path:'',component:SignupComponent}
   {path:'signup',component:SignupComponent},
   {path:'login',component:LoginComponent},
   {path:'**',component:PagenotfoundComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
