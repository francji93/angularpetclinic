import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietarioRoutingModule } from './propietario-routing.module';
import { PropietarioListComponent } from './propietario-list/propietario-list.component';
import { PropietarioFormComponent } from './propietario-form/propietario-form.component';

@NgModule({
  declarations: [PropietarioListComponent, PropietarioFormComponent],
  imports: [
    CommonModule,
    PropietarioRoutingModule
  ]
})
export class PropietarioModule { }
