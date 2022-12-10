import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  apiUrl = 'http://localhost/ioniccrud/backend';
  constructor(public http: HttpClient) {}

  login(requestData) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + '/login.php', JSON.stringify(requestData))
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
