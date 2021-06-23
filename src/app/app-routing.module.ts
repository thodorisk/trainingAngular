import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: 'customers', component: CustomersListComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: 'contracts', component: ContractListComponent},
  {path: 'contracts/:id', component: ContractDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'customers'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
