import { Component, OnInit } from '@angular/core';
import { Asignatura } from './asignatura.interface';
import { AsignaturaService } from './asignaturas.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {
  asignaturas: Asignatura[] = [];

  constructor(private asignaturasService: AsignaturaService) {}

 

  ngOnInit(): void {
    this.asignaturasService.getAsignaturas().subscribe(data => {
      this.asignaturas = data;
    });
  }
}


