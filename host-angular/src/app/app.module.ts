import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibModule } from 'philz-my-lib';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth-interceptor.interceptor';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { CallbackComponent } from './authentication/callback.component';
import { ProtectedComponent } from './protected/protected.component';
import { TestCustomElementComponent } from './test-custom-element/test-custom-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProtectedComponent,
    TestCustomElementComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MyLibModule.forRoot(environment),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
