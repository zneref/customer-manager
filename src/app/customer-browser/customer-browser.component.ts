import { Component, OnInit } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CustomerService } from '../customer.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {


  customer: Customer;
  customers: Customer[];

  constructor(private messageService: MessageService, private customerService: CustomerService) { }

  ngOnInit() {
    this.refresh();
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer).subscribe(
    () => {
      this.refresh()
      this.messageService.success("Deleting customer success");
    },
      error => {
        console.log(error);
        this.messageService.error("Error deleting customer"); 
      }
    )}

  onShift(direction: string) {
    const idx = this.customers.indexOf(this.customer);
    if (idx > 0 && direction === 'left') {
      this.customer = this.customers[idx - 1];
    }
    else if (idx < this.customers.length - 1 && direction === 'right') {
      this.customer = this.customers[idx + 1];
    }
  }

  private refresh() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
      this.customer = this.customers[0];
    });
  }
}
