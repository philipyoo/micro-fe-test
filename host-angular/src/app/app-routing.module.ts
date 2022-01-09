import { TestCustomElementComponent } from './test-custom-element/test-custom-element.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OktaAuthGuard } from './app.guard';
import { CallbackComponent } from './authentication/callback.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  {
    path: 'login/callback',
    component: CallbackComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'custom', // uses the custom library
    component: TestCustomElementComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
