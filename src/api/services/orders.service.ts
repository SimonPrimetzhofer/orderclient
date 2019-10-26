/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Order } from '../models/order';
@Injectable({
  providedIn: 'root',
})
class OrdersService extends __BaseService {
  static readonly OrdersGetOrdersPath = '/api/Orders';
  static readonly OrdersPostOrderPath = '/api/Orders';
  static readonly OrdersGetOrdersByGroupIdPath = '/api/Orders/ByGroup/{groupId}';
  static readonly OrdersGetOrderPath = '/api/Orders/{id}';
  static readonly OrdersPutOrderPath = '/api/Orders/{id}';
  static readonly OrdersDeleteOrderPath = '/api/Orders/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  OrdersGetOrdersResponse(): __Observable<__StrictHttpResponse<Array<Order>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Order>>;
      })
    );
  }  OrdersGetOrders(): __Observable<Array<Order>> {
    return this.OrdersGetOrdersResponse().pipe(
      __map(_r => _r.body as Array<Order>)
    );
  }

  /**
   * @param order undefined
   */
  OrdersPostOrderResponse(order: Order): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = order;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * @param order undefined
   */
  OrdersPostOrder(order: Order): __Observable<Order> {
    return this.OrdersPostOrderResponse(order).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * @param groupId undefined
   */
  OrdersGetOrdersByGroupIdResponse(groupId: number): __Observable<__StrictHttpResponse<Array<Order>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Orders/ByGroup/${groupId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Order>>;
      })
    );
  }
  /**
   * @param groupId undefined
   */
  OrdersGetOrdersByGroupId(groupId: number): __Observable<Array<Order>> {
    return this.OrdersGetOrdersByGroupIdResponse(groupId).pipe(
      __map(_r => _r.body as Array<Order>)
    );
  }

  /**
   * @param id undefined
   */
  OrdersGetOrderResponse(id: number): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Orders/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * @param id undefined
   */
  OrdersGetOrder(id: number): __Observable<Order> {
    return this.OrdersGetOrderResponse(id).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * @param params The `OrdersService.OrdersPutOrderParams` containing the following parameters:
   *
   * - `order`:
   *
   * - `id`:
   */
  OrdersPutOrderResponse(params: OrdersService.OrdersPutOrderParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.order;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Orders/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param params The `OrdersService.OrdersPutOrderParams` containing the following parameters:
   *
   * - `order`:
   *
   * - `id`:
   */
  OrdersPutOrder(params: OrdersService.OrdersPutOrderParams): __Observable<Blob> {
    return this.OrdersPutOrderResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param id undefined
   */
  OrdersDeleteOrderResponse(id: number): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Orders/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * @param id undefined
   */
  OrdersDeleteOrder(id: number): __Observable<Order> {
    return this.OrdersDeleteOrderResponse(id).pipe(
      __map(_r => _r.body as Order)
    );
  }
}

module OrdersService {

  /**
   * Parameters for OrdersPutOrder
   */
  export interface OrdersPutOrderParams {
    order: Order;
    id: number;
  }
}

export { OrdersService }
