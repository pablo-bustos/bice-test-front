import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Base } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class LastService extends Base {
  msLast = "http://localhost:9000/last";

  constructor(private http: HttpClient) {
    super()
  }
  
  callLast() {
    return this.http.post(this.msLast, {}, {
      headers: this.headers
    }).pipe(
      catchError(this.errorHandlerSendDefaultEmptyResponse)
    );
  }
}
