import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion1 } from './Fashion1';

@Injectable({
  providedIn: 'root'
})
export class ClientFashionService {
  constructor(private _http: HttpClient) { }

  // get all fashion
  getFashions(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/fashions", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion1>),
      retry(3),
      catchError(this.handleError))
  }

  // get fashion by id
  getFashion(fashionId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/fashions/" + fashionId, requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion1),
      retry(3),
      catchError(this.handleError))
  }

  // get fashion by style
  getFashionsByStyle(style: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")

    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }

    return this._http.get<any>("/fashions/style/" + style, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion1>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}