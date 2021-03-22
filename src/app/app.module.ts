import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './External/login/login.component';
import { SignupComponent } from './External/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { PagenotfoundComponent } from './External/pagenotfound/pagenotfound.component';
import { HomePageComponent } from './External/home-page/home-page.component'
//import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';

import { ViewDataComponent } from './External/view-data/view-data.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { LayoutModule } from './Layout/layout/layout.module';
//import { MyprofileComponent } from './Layout/layout/myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomePageComponent,
    ViewDataComponent,
    //MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    HttpClientModule
   
   // AngularFontAwesomeModule
    //LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
