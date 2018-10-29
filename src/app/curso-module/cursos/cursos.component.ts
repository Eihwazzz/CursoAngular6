import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoServiceService } from '../curso-service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public id: number;
  //aca iria item (ver)
  public sub: any; //esto es solo ejemplo


  constructor(private route: ActivatedRoute, private listadoCursos:CursoServiceService) { }

  ngOnInit() {

    this.listadoCursos.getCursos();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

}
