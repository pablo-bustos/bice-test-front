import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Base } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class ValuesService extends Base {
  url = "http://localhost:9000/values";

  constructor(private http: HttpClient) {
    super()
  }

  callValues(param: string) {
    return this.http.post(this.url, { param: param }, {
      headers: this.headers
    }).pipe(
      catchError(this.errorHandlerSendDefaultEmptyResponse)
    );
  }
}
