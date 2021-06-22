import { Component, OnInit } from '@angular/core';
import { I_Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details-list',
  templateUrl: './customer-details-list.component.html',
  styleUrls: ['./customer-details-list.component.scss']
})
export class CustomerDetailsListComponent implements OnInit {
  public customers: I_Customer[] = [];
  public selectedCustomer: I_Customer | null = null;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customerService.getCustomers().subscribe(resp => this.customers = resp);
  }

  customerDetails(customer: I_Customer): void {
    this.customerService.getCustomer(customer.id).subscribe(resp => this.selectedCustomer = resp);
  }

  deleteCustomer(customer: I_Customer): void {
    this.customerService.deleteCustomer(customer.id).subscribe((resp) => {
      this.fetchCustomers();
    });
  }

}
