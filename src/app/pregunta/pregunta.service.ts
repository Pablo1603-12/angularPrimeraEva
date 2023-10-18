
import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  private preguntas: Pregunta[] = [
    {
      pregunta: '¿Cómo se define TypeScript?',
      respuesta: 'Superconjunto tipado de JavaScript, esto significa que mejora al agregar un sistema de tipos estáticos',
    },
    {
      pregunta: '¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?',
      respuesta: 'Sistema de tipos estáticos',
    },
    {
      pregunta: 'Muestra la lista de tipos básicos de TypeScript.',
      respuestas: ['number' ,' string' ,' boolean',' symbol', ' bigint', ' undefined',' null'],
    },
    {
      pregunta: '¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?',
      respuestas: ['interfaz', ' tipo',' uniones'],
    },
    {
      pregunta: '¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.',
      respuesta: 'No se ejecutar TypeScript directamente en un navegador, porque los navegadores entienden JavaScript, lo que se suele hacer es pasar el codigo TypeScript a JavaScript y asi lo entiende',
    },
    {
      pregunta: 'Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?',
      respuesta: 'Por la Transpilación, que traduce y carga los archivos ts en el navegador como js ',
    }

  ];

  getPreguntas1(): Pregunta[] {
    return this.preguntas;
  }

  getPreguntas(): Observable<Pregunta[]> {
    return of(this.preguntas);
  }
}

