import { Component, OnInit } from '@angular/core';
import { I_Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public customers: I_Customer[] = [];
  public selectedCustomer: I_Customer = {id : 0};

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService.getCustomers().subscribe(resp => this.customers = resp);
  }

  rowClick(customer: I_Customer) {
    //this.selectedCustomer = this.customers[customer.id - 1];
    this.customerService.getCustomer(customer.id).subscribe(resp => this.selectedCustomer = resp);
  }
}
