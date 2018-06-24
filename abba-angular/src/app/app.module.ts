import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdverCreateComponent } from './dashboard/ads/adver-create/adver-create.component';
import { LoginService } from './shared/services/login.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingModule } from 'ngx-loading';
import { AdsService } from './shared/services/ads.service';
import { AuthService } from './shared/services/auth.service';
import {CustExtBrowserXhr} from './shared/commons/cust-ext-browser-xhr';
import { BrowserXhr } from '@angular/http';
import { BtnDepositComponent } from './dashboard/btn-deposit/btn-deposit.component';
import { DepositComponent } from './dashboard/ads/deposit/deposit.component';
import { RequestExchangeComponent } from './dashboard/ads/request-exchange/request-exchange.component';
// import { GocarIntlTelInputComponent } from './intl-telephone/intl-telephone.component';
import { RequestPaymentService } from './shared/services/request-payment.service';
import {NgxPaginationModule} from 'ngx-pagination';

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
    // GocarIntlTelInputComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgxEchartsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LoadingModule,
    ToastrModule.forRoot(),
    NgxMyDatePickerModule.forRoot(),
    CountryPickerModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    {provide: BrowserXhr, useClass:CustExtBrowserXhr},
    LoginService,
    AdsService,
    AuthService,
    RequestPaymentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
