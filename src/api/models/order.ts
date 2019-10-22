/* tslint:disable */
import { Customer } from './customer';
import { OrderLine } from './order-line';
export interface Order {
  id: number;
  dateTo: string;
  customer: Customer;
  orderLines: Array<OrderLine>;
  done: boolean;
}
