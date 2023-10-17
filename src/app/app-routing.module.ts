import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';

const routes: Routes = [
  { path: '', component: PreguntaComponent },
  { path: 'asignatura', component: AsignaturaComponent },
  { path: '', redirectTo: '/componente1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
