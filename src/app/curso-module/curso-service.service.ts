import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurso } from './curso/icurso';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  

  constructor(private http: HttpClient) { }

  public _getCursos():Observable<ICurso[]>{
    return this.http.get('http://demo3744158.mockable.io/cursos').pipe(
      map( ( response:Array<ICurso> ) => {
        return response.map( (curso: ICurso) => {

          return curso;
        });
      })		
    );
  }

}
