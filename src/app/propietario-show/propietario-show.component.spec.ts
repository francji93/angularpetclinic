import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioShowComponent } from './propietario-show.component';

describe('PropietarioShowComponent', () => {
  let component: PropietarioShowComponent;
  let fixture: ComponentFixture<PropietarioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropietarioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
