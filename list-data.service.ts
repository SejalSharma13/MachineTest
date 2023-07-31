import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListItem } from './api-list/list-data.model';


@Injectable({
  providedIn: 'root'
})
export class ListDataService {


  constructor(private http: HttpClient) { }
  getListItems(): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Code': '140-9299-524',
        'Accept': ' */*'
    });
    return this.http.get('https://api.efacto.app/testapi/api/Attribute/GetAttributeList?StatusCode=null&SearchValue&CmpId=1&BrnId=496&FyrId=23&EmpId=11&FilterType=undefined&LogId=137654&NavId=163673&MaxRecord=5&SearchColumn&MultiSearchColumns&FromDate&ToDate&DateType=VDATE&PeriodType=This%20Year&FromSql=N&formName=Brand', { "headers": reqHeader})
}
  
  Create_new_api( ApiData: any): Observable<any> {
    let reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Code': '140-9299-524',
        'Accept': ' */*'
    });
    var data = JSON.stringify(ApiData);
    console.log(data)
    return this.http.post<any>('https://api.efacto.app/testapi/api/Attribute', data, { headers: reqHeader })
}
}

