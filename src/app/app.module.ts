import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveSubscribersComponent } from './components/active-subscribers/active-subscribers.component';
import { InactiveSubscribersComponent } from './components/inactive-subscribers/inactive-subscribers.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveSubscribersComponent,
    InactiveSubscribersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
