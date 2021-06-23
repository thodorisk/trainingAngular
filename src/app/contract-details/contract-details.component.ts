import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I_Contract } from '../contracts';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {
  contractId: string | null = '';
  contract: I_Contract | null = null;

  constructor(private route: ActivatedRoute, private contractsService: ContractsService) { }

  ngOnInit(): void {
    this.contractId = this.route.snapshot.paramMap.get('id');
    this.contractsService.getContract(this.contractId).subscribe(resp => this.contract = resp);
  }

}
