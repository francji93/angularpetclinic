import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioFormComponent } from './propietario-form.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/core.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule, MatDatepickerModule, DateAdapter, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


fdescribe('PropietarioFormComponent', () => {
  let component: PropietarioFormComponent;
  let fixture: ComponentFixture<PropietarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => (createTranslateLoader),
            deps: [HttpClient]
          }
        }),
        HttpClientTestingModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        MatDatepickerModule
      ],
      declarations: [PropietarioFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('component HTML form should have all fields', () => {
    const formElement: HTMLElement = fixture.nativeElement;
    const firstNameField = formElement.querySelector('input[name="firstName"]');
    expect(firstNameField).toBeTruthy();
    const lastNameField = formElement.querySelector('input[name="lastName"]');
    expect(lastNameField).toBeTruthy();
    const addressField = formElement.querySelector('input[name="address"]');
    expect(addressField).toBeTruthy();
    const cityField = formElement.querySelector('input[name="city"]');
    expect(cityField).toBeTruthy();
    const telephoneField = formElement.querySelector('input[name="telephone"]');
    expect(telephoneField).toBeTruthy();
    const birthDayField = formElement.querySelector('input[name="birthDay"]');
    expect(birthDayField).toBeTruthy();
  });
});
