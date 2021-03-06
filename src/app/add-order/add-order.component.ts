import { Component, OnInit } from '@angular/core';
import { Order, Customer, Group, OrderLine } from 'src/api/models';
import { CustomersService, OrdersService } from 'src/api/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  //Observables for dropdowns
  public customers: Observable<Customer[]>;

  //Variables for new orderlines
  public amount: number = 1;
  public description: string = "";
  public newDate: Date;

  //Initialize as any for default values
  public newOrder: Order = {} as any;

  constructor(private customersService: CustomersService, private orderService: OrdersService) { }

  ngOnInit() {
    this.customers = this.customersService.CustomersGetCustomers();
  }

  public addOrderline() {

    if (!this.newOrder.orderLines)
      this.newOrder.orderLines = [];

    if (this.amount >= 1 && this.description.length > 0)
      this.newOrder.orderLines.push({
        amount: this.amount,
        description: this.description,
        id: undefined
      });
    else console.log("Invalid orderline!");
  }

  public removeOrderline(index: number) {
    this.newOrder.orderLines.splice(index);
  }

  public addOrder() {
    this.newOrder.done = false;
    //Valid DateTime template: 2019-12-24T00:00:00
    this.newOrder.dateTo = this.newDate.getFullYear() + "-" + (this.newDate.getMonth() + 1) + "-" + this.newDate.getDate()
      + "T" + (this.newDate.getHours() < 10 ? "0" + this.newDate.getHours() : this.newDate.getHours()) + ":" +
      (this.newDate.getMinutes() < 10 ? "0" + this.newDate.getMinutes() : this.newDate.getMinutes()) + ":" +
      (this.newDate.getSeconds() < 10 ? "0" + this.newDate.getSeconds() : this.newDate.getSeconds());
 
    this.orderService.OrdersPostOrder(this.newOrder).subscribe((response) => {
      console.log(response);
    });
  }

}
