import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    APP_ROUTES
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
