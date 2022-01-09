import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MyLibComponent } from './my-lib.component';

@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule {

  // this is required to allow using the host applications environment variables
  public static forRoot(environment: any): ModuleWithProviders<MyLibModule> {
    return {
        ngModule: MyLibModule,
        providers: [
            {
                provide: 'env', // you can also use InjectionToken
                useValue: environment
            }
        ]
    };
  }
}
