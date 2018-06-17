import { Component, OnInit } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CustomerService } from '../customer.service'

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {


  customer: Customer;
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
      this.customer = this.customers[0];
    });
  }

  onShift(direction: string) {
    const idx = this.customers.indexOf(this.customer);
    if (idx > 0 && direction === 'left') {
      this.customer = this.customers[idx - 1];
    }
    else if (idx < this.customers.length - 1 && direction === 'right') {
      this.customer = this.customers[idx + 1];
    }
  }
}
