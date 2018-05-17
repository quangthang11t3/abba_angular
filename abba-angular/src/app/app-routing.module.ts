import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { LoginComponent }      from './login/login.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AdsComponent } from './dashboard/ads/ads.component';
import { OverviewComponent } from './dashboard/ads/overview/overview.component';
import { EarningsComponent } from './dashboard/ads/earnings/earnings.component';
import { FeatureComponent } from './dashboard/ads/feature/feature.component';
import { ExchangeComponent } from './dashboard/ads/exchange/exchange.component';
import { OtherComponent } from './dashboard/ads/other/other.component';
import { AdverCreateComponent } from './dashboard/ads/adver-create/adver-create.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '',  component: AdsComponent,
        children: [
          { path: '', component: OverviewComponent },
          { path: 'earnings', component: EarningsComponent },
          { path: 'exchange', component: ExchangeComponent },
          { path: 'promotion', component: FeatureComponent }, 
          { path: 'adver-create', component: AdverCreateComponent },                             
          { path: 'other', component: OtherComponent }          
        ]
      },
      { path: 'admin', component: AdminComponent }
    ]
 }   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}