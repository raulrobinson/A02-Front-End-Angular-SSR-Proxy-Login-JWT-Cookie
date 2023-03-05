import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const Options = new HttpHeaders({
  "Access-Control-Allow-Origin": "http://localhost:4200"
});

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  getPublicContent() {
    return this.http.get(this.baseUrl + 'api/test/all', { headers: Options, responseType: 'json' });
  }

  getUserBoard() {
    return this.http.get(this.baseUrl + 'api/test/user', { responseType: 'text' });
  }

  getModeratorBoard() {
    return this.http.get(this.baseUrl + 'api/test/mod', { responseType: 'text' });
  }

  getAdminBoard() {
    return this.http.get(this.baseUrl + 'api/test/admin', { responseType: 'text' });
  }
}
