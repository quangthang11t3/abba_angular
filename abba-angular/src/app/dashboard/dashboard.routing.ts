import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule }             from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdsComponent } from './ads/ads.component';


// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
    //   { path: 'ads', component: AdsComponent },
      { path: '', redirectTo: 'ads', pathMatch: 'full' },
      { path: 'admin', component: AdminComponent}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
