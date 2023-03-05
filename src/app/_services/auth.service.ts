import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:4200"
  })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.baseUrl + 'api/auth/signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.baseUrl + 'api/auth/signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(
      this.baseUrl + 'api/auth/signout', { }, httpOptions);
  }

}
