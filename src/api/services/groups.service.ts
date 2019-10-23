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
}

module GroupsService {
}

export { GroupsService }
