import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { DateAdapter, MAT_DATE_LOCALE, MatTableModule, MatInputModule, MatDatepickerModule} from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { PropietarioListComponent } from './propietario/propietario-list/propietario-list.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PropietarioFormComponent } from './propietario/propietario-form/propietario-form.component';
import { FormsModule } from '@angular/forms';
import { PropietarioShowComponent } from './propietario-show/propietario-show.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    PropietarioListComponent,
    PropietarioFormComponent,
    PropietarioShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    MatMomentDateModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: LOCALE_ID, useValue: 'es' },  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
