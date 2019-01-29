import { TestBed } from '@angular/core/testing';

import { PropietarioService } from './propietario.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Owner } from 'src/app/shared/models/propietario';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

describe('PropietarioService', () => {
  // tslint:disable-next-line:prefer-const
  let service: PropietarioService;
  // tslint:disable-next-line:prefer-const
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    service = TestBed.get(PropietarioService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the mascotas list successful', () => {
    const testData: Owner[] = [new Owner({
      'id': 40, 'firstName': 'Prueba', 'lastName': 'McTest',
      'birthDay': moment(`2018-12-11`), 'address': 'Calle Falsa 123',
      'city': 'Madrid', 'telephone': '600111222'
    }),
    new Owner({
      'id': 40, 'firstName': 'Paco', 'lastName': 'Font',
      'birthDay': moment(`2011-06-10`), 'address': 'Calle de Las Torres 6',
      'city': 'Sedavi', 'telephone': '699881772'
    })];

    service.listAll().subscribe(data => {
      expect(data[0]).toEqual(testData[0]);
      expect(data.length).toBe(2);
    });

    const endpoint = environment.apiURL + '/owners';
    const req = httpTestingController.expectOne(endpoint, 'call to api');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
});
