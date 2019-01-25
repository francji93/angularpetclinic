import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Owner } from 'src/app/shared/models/propietario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private endpoint = environment.apiURL + '/owners';

  constructor(private http: HttpClient) { }

  listAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.endpoint);
  }

  delete(propietario: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${propietario}`);
  }

  create(propietario: Owner): Observable<any> {
    return this.http.post(this.endpoint, propietario);
  }

  update(propietario: Owner): Observable<any> {
    return this.http.put(`${this.endpoint}/${propietario.id}`, propietario);
  }

  findOne(id: number): Observable<any> {
    return this.http.get<Owner>(`${this.endpoint}/${id}`);
  }
}
