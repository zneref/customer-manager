import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  @Output() shift = new EventEmitter<string>();

  fontColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  CustomerType = CustomerType;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  
  changeIsActive() {
    this.isActive = !this.isActive;
  }

  changeFontColor() {
    this.fontColor = this.fontColor === "blue" ? "red" : "blue";
    this.messageService.success("Colour changed successful");
  }

  left() {
    this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }
}
