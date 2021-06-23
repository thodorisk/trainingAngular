import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    ErrorPageComponent,
    ContractListComponent,
    CustomerDetailsComponent,
    ContractDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
