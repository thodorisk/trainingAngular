import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I_Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  // public customerId: string | null = '';
  public customer: I_Customer | null = null;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customer = this.route.snapshot.data.customer;
  }
}
