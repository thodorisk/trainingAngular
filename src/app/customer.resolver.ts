import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { I_Customer } from './customer';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<I_Customer> {

  constructor(private customerService: CustomerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<I_Customer> {
    return this.customerService.getCustomer(route.paramMap.get('id'));
  }
}
