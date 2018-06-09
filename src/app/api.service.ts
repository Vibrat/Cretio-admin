import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient, private router: Router ) { }

  getData(url): Observable<any> {
      return this.http.get<any>(url);
  }

  putData(url, data): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put(url, data, { headers });
  }

  postData(url, data): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(url, data, { headers });
  }

  deleteData(url): Observable<any> {
      return this.http.delete<any>(url);
  }

  getToken(): any {
      /**
       * Return toke if valid and false if invalid
       * @type {string | null}
       */
      let token = window.localStorage.getItem('auth_app_token');
      return (token) ? token : false;
  }

  uploadFile(url, formData , headers ): Observable<any> {
      return this.http.post(url, formData, { headers });
  }

  redirectLogin(): void {
      this.router.navigateByUrl('/auth/logout', { skipLocationChange: false });
  }

  infiniteToken() {
      let token = window.localStorage.getItem('auth_app_token');
  }
}
