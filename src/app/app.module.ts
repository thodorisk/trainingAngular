import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContractListComponent } from './contract-list/contract-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    ErrorPageComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
