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
    console.log(selectedValue);
    if(selectedValue == 1){
      this.clase = "panel panel-default";
    }
    if(selectedValue == 2){
      this.clase = "panel panel-primary";
    }
    if(selectedValue == 3){
      this.clase = "panel panel-danger";
    }
    //console.log('value is ',selectedValue);
    this.cambioEstado.emit(selectedValue);
  }

  ngOnInit() {
  }

}
