import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './authentication/oktaauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(public oktaAuth: OktaAuthService) {}

  ngOnInit(): void {
    this.oktaAuth.isAuthenticated$.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }
}
