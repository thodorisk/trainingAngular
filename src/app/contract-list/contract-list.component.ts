import { Component, OnInit } from '@angular/core';
import { I_Contract } from '../contracts';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  public contracts: I_Contract[] = [];

  constructor(private contractService: ContractsService) {}

  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.contractService.getContracts().subscribe(resp => this.contracts = resp);
  }
}
