import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) { }


  public getGordonBeach(): Observable<any> {
    let path = 'https://gis.health.gov.il/arcgis/rest/services/EnvHealth/ENV_Beaches_Results_Pro2/MapServer/0/query'

    return this.http.get(path, {
      params: {
       f: 'json',
       spatialRel: 'esriSpatialRelIntersects',
       maxAllowableOffset: '0.01866138385297604',
       objectIds: '68',
       outSR: '102100'
      },

      headers: {
        Connection: 'keep-alive',
        'sec-ch-ua-mobile': '?0'
      }

    });
  }
}