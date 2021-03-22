import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';

import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview/overview.component';
import { PerformanceComponent } from './performance/performance.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SingleInvoiceComponent } from './single-invoice/single-invoice.component';
import { BrowseComponent } from './browse/browse.component';



@NgModule({
  declarations: [MyprofileComponent, LayoutComponent, OverviewComponent, PerformanceComponent, AnalyticsComponent, LandingComponent, ProjectsComponent, UserProfileComponent, CandidatesComponent, InvoicesComponent, SingleInvoiceComponent, BrowseComponent, ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
