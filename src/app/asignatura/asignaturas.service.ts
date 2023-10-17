import { Injectable } from '@angular/core';
import { Asignatura } from './asignatura.interface'; // Importa la interfaz

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private asignaturas: Asignatura[] = [
    { nombre: 'Web', siglas: 'DWC', profesor: 'Don Jose Maria Polavieja' },
    { nombre: 'Linux', siglas: 'DAW', profesor: 'Don Jose Maria Carazo' },
    { nombre: 'Ingles', siglas: 'ING', profesor: 'Don Pablo' },
  ];

  getAsignaturas(): Asignatura[] {
    return this.asignaturas;
  }
}
