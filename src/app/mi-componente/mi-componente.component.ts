import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit, OnChanges {

  @Input() valor: string;

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(){

  }

  public onButtonClick(): void{
    console.log("Test Event Button");
  }

}
