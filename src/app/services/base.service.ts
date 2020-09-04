import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export class Base {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST'
  });

  constructor ( ) {}

  errorHandlerSendDefaultEmptyResponse() {
    return (): Observable<string> => {
      return of("{}");
    }
  }
}