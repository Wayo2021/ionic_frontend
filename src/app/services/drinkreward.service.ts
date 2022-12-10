import {
  ApiResponse,
  GetDrinkApiResponse,
  GetRewardApiResponse,
  GetTypeApiResponse,
  GetTypesApiResponse,
  GetSizeApiResponse,
  GetRedeemApiResponse,
  Redeem,
  Drink,
  Type,
  Types,
  Size,
} from './../models/drinkreward.model';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DrinkrewardService {
  apiUrl = 'http://localhost/ioniccrud/backend';

  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  // TODO: DRINK DATA
  listDrink(): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(this.apiUrl + '/indexDrink.php')
      .pipe(
        tap((response) => {
          console.log('list drink retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }
  getDrink(typs_id: number): Observable<GetDrinkApiResponse> {
    return this.httpClient
      .post<GetDrinkApiResponse>(
        this.apiUrl + '/getDrink.php',
        { id: typs_id },
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          console.log('list drink retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  // TODO: REWARD DATA
  listReward(): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(this.apiUrl + '/indexReward.php')
      .pipe(
        tap((response) => {
          console.log('list tudent retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  getReward(rew_id: number): Observable<GetRewardApiResponse> {
    return this.httpClient
      .post<GetRewardApiResponse>(
        this.apiUrl + '/getReward.php',
        { id: rew_id },
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          console.log('list reward retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  searchReward(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.apiUrl).pipe(
      tap((response) => {
        console.log('list reward retrieved!');
        console.log(response);
      }),
      catchError(this.handleError)
    );
  }

  createRedeem(data): Observable<ApiResponse> {
    return this.httpClient
      .post<ApiResponse>(
        this.apiUrl + '/createRedeem.php',
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  listRedeem(cus_id:number): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(this.apiUrl + '/indexRedeem.php' + cus_id)
      .pipe(
        tap((response) => {
          console.log('list tudent retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }
  getRedeem(red_id: number): Observable<GetRedeemApiResponse> {
    return this.httpClient
      .post<GetRedeemApiResponse>(
        this.apiUrl + '/getRedeem.php',
        { id: red_id },
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          console.log('list reward retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  // TODO: TYPE DATA
  getType(typ_id: number): Observable<GetTypeApiResponse> {
    const getTypes = { typ_id };
    return this.httpClient
      .post<GetTypeApiResponse>(
        this.apiUrl + '/getTypes.php',
        getTypes,
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

  // TODO: TYPES DATA
  listTypes(): Observable<ApiResponse> {
    return this.httpClient
      .get<ApiResponse>(this.apiUrl + '/indexTypes.php')
      .pipe(
        tap((response) => {
          console.log('list tudent retrieved!');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  getTypes(typs_id: number): Observable<GetTypesApiResponse> {
    const getCustomers = { typs_id };
    return this.httpClient
      .post<GetTypesApiResponse>(
        this.apiUrl + '/getTypes.php',
        getCustomers,
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
  // TODO: TYPES DATA
  getSize(siz_id: number): Observable<GetSizeApiResponse> {
    const getCustomers = { siz_id };
    return this.httpClient
      .post<GetSizeApiResponse>(
        this.apiUrl + '/getCustomers.php',
        getCustomers,
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
