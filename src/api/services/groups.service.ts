/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Group } from '../models/group';
@Injectable({
  providedIn: 'root',
})
class GroupsService extends __BaseService {
  static readonly GroupsGetGroupsPath = '/api/Groups';
  static readonly GroupsPostGroupPath = '/api/Groups';
  static readonly GroupsGetGroupPath = '/api/Groups/{id}';
  static readonly GroupsPutGroupPath = '/api/Groups/{id}';
  static readonly GroupsDeleteGroupPath = '/api/Groups/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  GroupsGetGroupsResponse(): __Observable<__StrictHttpResponse<Array<Group>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Group>>;
      })
    );
  }  GroupsGetGroups(): __Observable<Array<Group>> {
    return this.GroupsGetGroupsResponse().pipe(
      __map(_r => _r.body as Array<Group>)
    );
  }

  /**
   * @param group undefined
   */
  GroupsPostGroupResponse(group: Group): __Observable<__StrictHttpResponse<Group>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = group;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Group>;
      })
    );
  }
  /**
   * @param group undefined
   */
  GroupsPostGroup(group: Group): __Observable<Group> {
    return this.GroupsPostGroupResponse(group).pipe(
      __map(_r => _r.body as Group)
    );
  }

  /**
   * @param id undefined
   */
  GroupsGetGroupResponse(id: number): __Observable<__StrictHttpResponse<Group>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Groups/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Group>;
      })
    );
  }
  /**
   * @param id undefined
   */
  GroupsGetGroup(id: number): __Observable<Group> {
    return this.GroupsGetGroupResponse(id).pipe(
      __map(_r => _r.body as Group)
    );
  }

  /**
   * @param params The `GroupsService.GroupsPutGroupParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `group`:
   */
  GroupsPutGroupResponse(params: GroupsService.GroupsPutGroupParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.group;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Groups/${params.id}`,
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
   * @param params The `GroupsService.GroupsPutGroupParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `group`:
   */
  GroupsPutGroup(params: GroupsService.GroupsPutGroupParams): __Observable<Blob> {
    return this.GroupsPutGroupResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param id undefined
   */
  GroupsDeleteGroupResponse(id: number): __Observable<__StrictHttpResponse<Group>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Groups/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Group>;
      })
    );
  }
  /**
   * @param id undefined
   */
  GroupsDeleteGroup(id: number): __Observable<Group> {
    return this.GroupsDeleteGroupResponse(id).pipe(
      __map(_r => _r.body as Group)
    );
  }
}

module GroupsService {

  /**
   * Parameters for GroupsPutGroup
   */
  export interface GroupsPutGroupParams {
    id: number;
    group: Group;
  }
}

export { GroupsService }
