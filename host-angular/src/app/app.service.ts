import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(this.apiUserUrl());
  }

  private apiUserUrl() {
    return `${environment.apiUrl}/users`;
  }
}
