import { Component, OnInit } from '@angular/core';
import { I_Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
  }
}
