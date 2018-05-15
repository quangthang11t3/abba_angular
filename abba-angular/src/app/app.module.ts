import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AdsComponent } from './dashboard/ads/ads.component';
import { OverviewComponent } from './dashboard/ads/overview/overview.component';
import { EarningsComponent } from './dashboard/ads/earnings/earnings.component';
import { ExchangeComponent } from './dashboard/ads/exchange/exchange.component';
import { OtherComponent } from './dashboard/ads/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    AdsComponent,
    OverviewComponent,
    EarningsComponent,
    ExchangeComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
