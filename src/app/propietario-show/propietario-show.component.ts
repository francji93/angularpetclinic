import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../core/service/propietario.service';
import { Owner } from '../shared/models/propietario';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'pcli-propietario-show',
  templateUrl: './propietario-show.component.html',
  styleUrls: ['./propietario-show.component.scss']
})
export class PropietarioShowComponent implements OnInit {

  error: String;

  public propietario: Owner;
  constructor(private propietarioService: PropietarioService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.propietarioService.findOne(id).subscribe(result => {
      this.propietario = result;
    }, (error) => this.error = error);
  }

  deleteItem(propietarioId: number) {
    this.propietarioService.delete(propietarioId).subscribe(() => {
      console.log('registro borrado');
    },
      (error) => {
        return Observable.throw(error);
      });
  }

}
