import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { CustomErrorHandlerService } from './custom-error-handler.service';

const ERROR_HANDLER = environment.isDebugMode ? ErrorHandler :
CustomErrorHandlerService;

@NgModule({
  declarations: [],
  imports: [
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    CommonModule
  ],
  exports: [
    TranslateModule
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: ErrorHandler, useClass: ERROR_HANDLER },
      ]
    };
  }
 }

 export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
