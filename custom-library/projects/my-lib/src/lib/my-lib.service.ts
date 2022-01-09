import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor(private http: HttpClient, @Inject('env') private env: any) { }

  getDrinkData() {
    return this.http.get(this.apiDrinkUrl());
  }

  private apiDrinkUrl() {
    return `${this.env.apiUrl}/drinks`
  }
}
