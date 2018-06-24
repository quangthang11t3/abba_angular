import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountryPickerModule } from 'ngx-country-picker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
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
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { NavSPComponent } from './dashboard/nav-sp/nav-sp.component';
import { ReportFilterComponent } from './dashboard/report-filter/report-filter.component';
import { FeatureComponent } from './dashboard/ads/feature/feature.component';
import { PromotionSettingComponent } from './dashboard/ads/promotion-setting/promotion-setting.component';
import { NgxMyDatePickerModule  } from 'ngx-mydatepicker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdverCreateComponent } from './dashboard/ads/adver-create/adver-create.component';
import { BtnDepositComponent } from './dashboard/btn-deposit/btn-deposit.component';
import { DepositComponent } from './dashboard/ads/deposit/deposit.component';
import { RequestExchangeComponent } from './dashboard/ads/request-exchange/request-exchange.component';
import { PaymentDetailComponent } from './dashboard/ads/payment-detail/payment-detail.component';
// import { GocarIntlTelInputComponent } from './intl-telephone/intl-telephone.component';

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
    OtherComponent,
    SidebarComponent,
    NavSPComponent,
    ReportFilterComponent,
    FeatureComponent,
    PromotionSettingComponent,
    AdverCreateComponent,
    BtnDepositComponent,
    DepositComponent,
    RequestExchangeComponent,
    PaymentDetailComponent,
    // GocarIntlTelInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgxEchartsModule,
    CommonModule,
    FormsModule,
    NgxMyDatePickerModule.forRoot() ,
    CountryPickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
