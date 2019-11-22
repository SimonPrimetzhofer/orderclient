/* tslint:disable */
import { Customer } from './customer';
import { OrderLine } from './order-line';
export interface Order {
  id: number;
  dateTo: string;
  customerId: number;
  customer: Customer;
  orderLines: Array<OrderLine>;
  done: boolean;
}
