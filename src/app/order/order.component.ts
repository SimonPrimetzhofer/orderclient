import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import { OrdersService } from 'src/api/services';
import { Order } from 'src/api/models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //Member-variables for displaying the data as async observable
  public groupId: Observable<string>;
  public orders: Observable<Order[]>;

  constructor(private route: ActivatedRoute, private orderService: OrdersService) { }

  ngOnInit() {
    //Get GroupId from URL and load orders
    this.groupId = this.route.paramMap.map(param => param.get('id'));
    this.LoadOrderLines();
  }

  public LoadOrderLines() {
    //Load all orders per group
    this.groupId.subscribe(id => {
      this.orders = this.orderService.OrdersGetOrdersByGroupId(+id);
    });
  }

  public SetOrderDone(order: Order) {
    //Set Order to done when the user clicks the button
    order.done = true;
    this.orderService.OrdersPutOrder({
      id: order.id,
      order: order
    }).subscribe( () => {
      //Reload table after setting order to done
      this.LoadOrderLines();
    });
  }

}
