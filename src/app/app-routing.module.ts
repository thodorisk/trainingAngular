import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: 'customers', component: CustomersListComponent},
  {path: 'contracts', component: ContractListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'customers'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
