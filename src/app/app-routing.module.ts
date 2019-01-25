import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietarioListComponent } from './propietario/propietario-list/propietario-list.component';
import { PropietarioFormComponent } from './propietario/propietario-form/propietario-form.component';
import { PropietarioShowComponent } from './propietario/propietario-show/propietario-show.component';

const routes: Routes = [
  { path: 'propietarios', component: PropietarioListComponent },
  { path: 'propietarios/form', component: PropietarioFormComponent},
  { path: 'propietarios/form/:id', component: PropietarioFormComponent},
  { path: 'propietarios/:id', component: PropietarioShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
