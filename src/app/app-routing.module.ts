import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerResolver } from './customer.resolver';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ LoginGuard ]
  },
  {
    path: 'customers',
    component: CustomersListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'customers/:id',
    component: CustomerDetailsComponent,
    resolve: {
      customer: CustomerResolver
    }
  },
  {path: 'contracts', component: ContractListComponent, canActivate: [ AuthGuard ]},
  {path: 'contracts/:id', component: ContractDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'customers'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
