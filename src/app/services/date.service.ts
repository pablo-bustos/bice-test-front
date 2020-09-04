import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Base } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class DateService extends Base {
  url = "http://localhost:9000/dates";

  constructor(private http: HttpClient) {
    super()
  }

  callDate(element: string, when: string) {
    return this.http.post(this.url, { param: element, date: when }, {
      headers: this.headers
    }).pipe(
      catchError(this.errorHandlerSendDefaultEmptyResponse)
    );
  }
}
