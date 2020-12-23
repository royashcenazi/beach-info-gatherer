import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { map } from 'rxjs/operators';



@Injectable()
export class ApiService {

  constructor(public http: HttpClient) { }


  public getGordonBeachPullotion(): Observable<any> {
    let path = 'https://gis.health.gov.il/arcgis/rest/services/EnvHealth/ENV_Beaches_Results_Pro2/MapServer/0/query'

    return this.http.get(path, {
      params: {
       f: 'json',
       objectIds: '68',
       outFields: 'season_start_date,season_end_date,ENTEROCOCC_RESULTS_MAX,ENTEROCOCC_DATE,blue_flag,FEACAL_COLIFORM_RESULTS_MAX,FEACAL_COLIFORM_DATE'
      },

      headers: {
        Connection: 'keep-alive',
        'sec-ch-ua-mobile': '?0'
      }

    });

  }

  public getTelAvivBeachWaves(): Observable<any> {
    return this.http.get("https://cors-anywhere.herokuapp.com/https://www.windalert.co.il/WForecast/LoadWaveStatistics?stationId=51")
  }


public getSomeApi(): Observable<any> {
  return this.http.get("https://api.mocki.io/v1/ee827d48")
  }
}