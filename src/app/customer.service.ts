import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { I_Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _apiUrl: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  public getCustomers(): Observable<I_Customer[]> {
    return this._http.get<I_Customer[]>(`${this._apiUrl}/customers`);
  }

  public getCustomer(id: number): Observable<I_Customer> {
    return this._http.get<I_Customer>(`${this._apiUrl}/customers/${id}`);
  }

  public deleteCustomer(id: number): Observable<I_Customer> {
    return this._http.delete<I_Customer>(`${this._apiUrl}/customers/${id}`);
  }
}
