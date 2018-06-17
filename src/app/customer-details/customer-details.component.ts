import { Component, OnInit, Input } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  fontColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  CustomerType = CustomerType;

  constructor() { }

  ngOnInit() {
  }
  
  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeFontColor() {
    this.fontColor = this.fontColor === "blue" ? "red" : "blue";
  }
}
