import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/shared/models/propietario';
import { PropietarioService } from 'src/app/core/service/propietario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pcli-propietario-form',
  templateUrl: './propietario-form.component.html',
  styleUrls: ['./propietario-form.component.scss']
})
export class PropietarioFormComponent implements OnInit {

  public propietario: Owner;

  constructor(private propietarioService: PropietarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.propietarioService.findOne(id).subscribe(result => {
        this.propietario = result;
      });
    } else {
      this.propietario = new Owner();
    }
  }

  submitForm(propietario: Owner) {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.propietarioService.update(propietario).subscribe(() => this.router.navigate(['/propietarios', id]));
    } else {
      this.propietarioService.create(propietario).subscribe(result => {
        this.router.navigate(['/propietarios', result.id]);
      });
    }
  }

}
