import { Component, OnInit } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {
  customers: Customer[] = [
      {
      name: "Johnny Kowalsky",
      photoUrl: "../assets/images/person.png",
      age: 40,
      description: "Very important client",
      address: {
        street: "Zielona",
        houseNumber: 34,
        city: "Warszawa"
      },
      type: CustomerType.Premium,
      categories: [
        "foreign",
        "bussiness",
        "highbudged"
      ]
    },
    {
      name: "Andy Novak",
      photoUrl: "../assets/images/person.png",
      age: 40,
      description: "Very important client",
      address: {
        street: "Agrestowa",
        houseNumber: 5,
        city: "Warszawa"
      },
      type: CustomerType.VIP,
      categories: [
        "foreign",
        "bussiness",
        "highbudged"
      ]
    },
    {
      name: "Stevie Wonder",
      photoUrl: "../assets/images/person.png",
      age: 40,
      description: "Very important client",
      address: {
        street: "Purpurowa",
        houseNumber: 65,
        city: "Warszawa"
      },
      type: CustomerType.Premium,
      categories: [
        "foreign",
        "bussiness",
        "highbudged"
      ]
    }
  ];

  customer: Customer = null;


  constructor() { }

  ngOnInit() {
  }

}
