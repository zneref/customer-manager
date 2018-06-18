import { Injectable, Inject } from '@angular/core';
import { Customer, CustomerType, CONFIG, Config } from './model';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`).map(customers => customers.slice(0, this.config.customerLimit));
  }

  deleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`)
  }
}
