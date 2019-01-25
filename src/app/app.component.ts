import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { DateAdapter } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'pcli-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'petclinic';

  constructor(
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService,
  ) {

this.translate.onLangChange.subscribe(event => {
  this.dateAdapter.setLocale(event.lang);
  });
    this.dateAdapter.setLocale(environment.defaultLang);
    this.translate.setDefaultLang(environment.defaultLang);
    this.translate.use(environment.defaultLang);
    console.log('Entorno: ' + environment.name);
  }

}
