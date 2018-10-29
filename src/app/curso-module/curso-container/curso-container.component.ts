import { Component, OnInit } from '@angular/core';
import { Estado } from '../curso/estado.enum';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.css']
})
export class CursoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cambiarEstado(estadoACambiar:Estado){
    //this.unCurso.estado = Estado[estadoACambiar];
    //this.unCurso.estado = <Estado>estadoACambiar;
  }

}
