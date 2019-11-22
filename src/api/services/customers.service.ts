/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root',
})
class CustomersService extends __BaseService {
  static readonly CustomersGetCustomersPath = '/api/Customers';
  static readonly CustomersPostCustomerPath = '/api/Customers';
  static readonly CustomersGetCustomerPath = '/api/Customers/{id}';
  static readonly CustomersPutCustomerPath = '/api/Customers/{id}';
  static readonly CustomersDeleteCustomerPath = '/api/Customers/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  CustomersGetCustomersResponse(): __Observable<__StrictHttpResponse<Array<Customer>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Customer>>;
      })
    );
  }  CustomersGetCustomers(): __Observable<Array<Customer>> {
    return this.CustomersGetCustomersResponse().pipe(
      __map(_r => _r.body as Array<Customer>)
    );
  }

  /**
   * @param customer undefined
   */
  CustomersPostCustomerResponse(customer: Customer): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customer;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param customer undefined
   */
  CustomersPostCustomer(customer: Customer): __Observable<Customer> {
    return this.CustomersPostCustomerResponse(customer).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param id undefined
   */
  CustomersGetCustomerResponse(id: number): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Customers/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param id undefined
   */
  CustomersGetCustomer(id: number): __Observable<Customer> {
    return this.CustomersGetCustomerResponse(id).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param params The `CustomersService.CustomersPutCustomerParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `customer`:
   */
  CustomersPutCustomerResponse(params: CustomersService.CustomersPutCustomerParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.customer;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Customers/${params.id}`,
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
   * @param params The `CustomersService.CustomersPutCustomerParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `customer`:
   */
  CustomersPutCustomer(params: CustomersService.CustomersPutCustomerParams): __Observable<Blob> {
    return this.CustomersPutCustomerResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param id undefined
   */
  CustomersDeleteCustomerResponse(id: number): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Customers/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param id undefined
   */
  CustomersDeleteCustomer(id: number): __Observable<Customer> {
    return this.CustomersDeleteCustomerResponse(id).pipe(
      __map(_r => _r.body as Customer)
    );
  }
}

module CustomersService {

  /**
   * Parameters for CustomersPutCustomer
   */
  export interface CustomersPutCustomerParams {
    id: number;
    customer: Customer;
  }
}

export { CustomersService }
