import { Component } from '@angular/core';
import { IAlumno } from './alumno/ialumno';
import { IDocente } from './docente/idocente';
import { ICurso } from './curso/icurso';
import { Estado } from './curso/estado.enum';

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
      "nombre": "Juan",
      "apellido": "Perez",
      "fechaNacimiento": new Date("03/15/1975")
    }
    this.unCurso = {
      "nombre": "Angular 6",
      "cantidadClases": 14,
      "horario": '18-22',
      "dias":['Lunes','Miercoles','Jueves'],
      //"estado":Estado[Estado.Activo]
      "estado":Estado.Activo
    }
  }

  cambiarEstado(estadoACambiar:number){
    //this.unCurso.estado = Estado[estadoACambiar];
    this.unCurso.estado = <Estado>estadoACambiar;
  }
  
}
