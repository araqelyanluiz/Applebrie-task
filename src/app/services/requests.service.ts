import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employees } from './models/employees';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  toggle() {
    return this.sideNavToggleSubject.next(null);
  }

  getEmployees():Observable<Employees[]>{
    return this.http.get<{results:Employees[]}>('https://randomuser.me/api?results=25').pipe(map(response => {
      return response.results;
    }))
  }

  getCurrencyList():Observable<any[]>{
    return this.http.get<any>('http://api.currencylayer.com/list?access_key=ae288a068c3ee292db1c9aa7e3b12b64').pipe(map(response => {
      return response.currencies;
    }))
  }

  getRates():Observable<any>{
    return this.http.get<any>('http://api.currencylayer.com/live?access_key=ae288a068c3ee292db1c9aa7e3b12b64').pipe(map(response => {
      return response;
    }))
  }

  getExchange(data:any):Observable<any>{
    return this.http.get<any>('http://api.currencylayer.com/live?access_key=ae288a068c3ee292db1c9aa7e3b12b64&source='+data.from+'&currencies='+data.to).pipe(map(response => {
      console.log(response)
      return response;
    }))
  }

}
