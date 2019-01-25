import { Injectable, ErrorHandler } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  endpoint = environment.apiURL + 'logger/error';

  constructor(
    private http: HttpClient,
    private translate: TranslateService) { }

  handleError(error: any): void {

    let errorLog = `Navigator Info:
    user-agent:
    ${navigator.userAgent},
    platform:
    ${navigator.platform},
    language:
    ${this.translate.currentLang};
    Error description: `;
    try {
      // Si el error se puede deserializar se devuelve completo
      errorLog += JSON.stringify(error, null, 2);
    } catch {
      // En caso contrario se crea un error con los elementos necesarios
      errorLog += `
      error:
      ${error.toString()},
      message:
      ${error.message},
      stack:
      ${error.stack};`;
    }
    this.http.post(this.endpoint, errorLog).subscribe(() => true);
  }
}
