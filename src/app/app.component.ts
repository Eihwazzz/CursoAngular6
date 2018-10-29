import { Component } from '@angular/core';
import { IAlumno } from './alumno/ialumno';
import { IDocente } from './docente/idocente';
import { ICurso } from './curso-module/curso/icurso';
import { Estado } from './curso-module/curso/estado.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp'; //Si no se define es publica. Debe ser publica para que la vea el template
  public valorPadre: string = 'Really!';

  public unAlumno: IAlumno;
  public unDocente: IDocente;
  public unCurso: ICurso;

  constructor(){
    this.unAlumno = {
      "nombre": "Martin",
      "apellido": "Brito",
      "fechaNacimiento": new Date("04/25/1985")
    }
    this.unDocente = {
      "id":1,
      "nombre": "Juan",
      "apellido": "Perez"
    }
    this.unCurso = {
      "id":1,
      titulo:"Curso de Angular 6",
      fechaInicio:1540763104005,
      fechaFin:1540763104005,
      asistentes:["Peres Maria Sol, Radoner Mariano"],
      profesor:this.unDocente,
      laboratorio:7,
      "estado":Estado.Activo
    }
  }

  cambiarEstado(estadoACambiar:Estado){
    //this.unCurso.estado = Estado[estadoACambiar];
    this.unCurso.estado = <Estado>estadoACambiar;
  }
  
}
