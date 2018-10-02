import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ICurso } from './icurso';
import { Estado } from './estado.enum';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;
  @Output() cambioEstado = new EventEmitter();

  @HostBinding('attr.class') clase;

  //estados = [];
  

  constructor() { 
    //this.estados = Object.keys(Estado);
  }

  cambiarEstado(selectedValue:number){
    //console.log(selectedValue);
    this.setHostClass(selectedValue);
    this.cambioEstado.emit(selectedValue);
  }

  ngOnInit() {
    this.setHostClass(this.curso.estado);
  }

  setHostClass(value: number){
    if(value == 1){
      this.clase = "list-group list-group-item list-group-item-success";
    }
    if(value == 2){
      this.clase = "list-group list-group-item list-group-item-danger";
    }
    if(value == 3){
      this.clase = "list-group list-group-item list-group-item-primary";
    }
  }
}
