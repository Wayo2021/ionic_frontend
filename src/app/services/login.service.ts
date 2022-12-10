import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError} from 'rxjs';
import {ApiRequest,ApiResponse,} from '../models/login.model';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'http://localhost/ioniccrud/backend';

  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  doLogin(loginData: ApiRequest) {
    return this.httpClient
      .post<ApiResponse>(
        this.apiUrl + '/login.php',
        loginData,
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          console.log('list tudent retrieves!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  //Handdle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code ${error.status}, ' + 'body was: ${error.error}'
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
