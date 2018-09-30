import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from './icurso';
import { Estado } from './estado.enum';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;

  estados = [];
  

  constructor() { 
    this.estados = Object.keys(Estado);
  }

  cambiarEstado(selectedValue:string){
    console.log('value is ',selectedValue);
  }

  ngOnInit() {
  }

}
