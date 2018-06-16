import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  customer: Customer = {
    name: "Johnny Kowalsky",
    photoUrl: "assets/images/person.png",
    age: 40,
    description: "Very important client",
    address: {
      street: "Zielona",
      houseNumber: 34,
      city: "Warszawa"
    }

  }; 

  fontColor: string = "blue";
  isActive: boolean = true;

  constructor() {
  }

  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeFontColor() {
    this.fontColor = this.fontColor === "blue" ? "red" : "blue";
  }
}
