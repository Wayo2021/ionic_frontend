import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  ApiResponse,
  GetCustomersApiResponse,
  GetPoint_totalApiResponse,
} from '../models/customers.model';
import { Customers, Point_total } from '../models/customers.model';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  apiUrl = 'http://localhost/ioniccrud/backend';

  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listCustomers(): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(this.apiUrl + '/indexCustomers.php')
      .pipe(
        tap((response) => {
          console.log('list listCustomers retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  getCustomers(cus_id: number): Observable<GetCustomersApiResponse> {
    const getCustomers = { cus_id };
    return this.httpClient
      .post<GetCustomersApiResponse>(
        this.apiUrl + '/getCustomers.php',
        getCustomers,
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          console.log('list getCustomers retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }
  createCustomers(customers: Customers): Observable<ApiResponse> {
    return this.httpClient
      .post<ApiResponse>(
        this.apiUrl + '/register.php',
        customers,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateCustomers(customers: Customers): Observable<ApiResponse> {
    return this.httpClient
      .post<ApiResponse>(
        this.apiUrl + '/updateCustomers.php',
        customers,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updatePassword(customers: Customers): Observable<ApiResponse> {
    return this.httpClient
      .post<ApiResponse>(
        this.apiUrl + '/updatePassword.php',
        customers,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  
  listPoint_total(): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(this.apiUrl + '/indexPoint.php')
      .pipe(
        tap((response) => {
          console.log('list tudent retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  getPoint_total(tot_id: number): Observable<GetPoint_totalApiResponse> {
    return this.httpClient
      .post<GetPoint_totalApiResponse>(
        this.apiUrl + '/getPoint.php',
        { id: tot_id },
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          console.log('list tudent retrieved!');
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
