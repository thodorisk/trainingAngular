import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { I_Contract } from './contracts';
import { I_Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private _apiUrl: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  public getContracts(): Observable<I_Contract[]> {
    return this._http.get<I_Contract[]>(`${this._apiUrl}/contracts`);
  }

  public getContract(id: string | null): Observable<I_Contract> {
    return this._http.get<I_Contract>(`${this._apiUrl}/contracts/${id}`);
  }
}