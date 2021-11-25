import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsListComponent } from './dashboard/results-list/results-list.component';
import { ResultComponent } from './dashboard/results-list/result/result.component';
import { QueryComponent } from './dashboard/query/query.component';
import { QueryPreferencesComponent } from './dashboard/query/query-preferences/query-preferences.component';
import { ViewPreferencesComponent } from './dashboard/results-list/view-preferences/view-preferences.component';
import { UserAccountComponent } from './dashboard/user-account/user-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsListComponent,
    ResultComponent,
    QueryComponent,
    QueryPreferencesComponent,
    ViewPreferencesComponent,
    UserAccountComponent,
    DashboardComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
