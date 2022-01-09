import { OktaAuthService } from './authentication/oktaauth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oktaAuthService: OktaAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // handle authenticated request
    if (this.oktaAuthService.isAuthenticated()) {
      return from(this.handle(request, next));
    }

    // handle unauthenticated request
    return next.handle(request);
  }

  async handle(request: HttpRequest<any>, next: HttpHandler) {
    const { accessToken } = await this.oktaAuthService.getAccessToken();

    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return next.handle(authRequest).toPromise();
  }
}
