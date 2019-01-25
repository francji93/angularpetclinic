import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/shared/models/propietario';
import { PropietarioService } from 'src/app/core/service/propietario.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'pcli-propietario-list',
  templateUrl: './propietario-list.component.html',
  styleUrls: ['./propietario-list.component.scss']
})
export class PropietarioListComponent implements OnInit {

  public propietario: Owner[];
  dataSourcePropietarios: MatTableDataSource<Owner>;
  displayedColumns = ['firstName', 'lastName', 'address', 'city',
  'telephone', 'birthDay'];

  constructor(private propietarioService: PropietarioService) { }

  ngOnInit() {
    this.propietarioService.listAll().subscribe(propietarioResponse => {
      this.dataSourcePropietarios = new MatTableDataSource<Owner>(propietarioResponse);
      // this.propietario = propietarioResponse;
    });
  }

}
