import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './app.routes';

import {HttpClientModule}  from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
