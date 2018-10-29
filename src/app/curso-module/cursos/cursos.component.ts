import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoServiceService } from '../curso-service.service';
import { ICurso } from 'src/app/curso-module/curso/icurso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public id: number;
  //aca iria item (ver)
  public sub: any; //esto es solo ejemplo
  public cursos:ICurso[];

  constructor(private route: ActivatedRoute, private listadoCursos:CursoServiceService) { }

  ngOnInit() {

    let varAux = this.listadoCursos._getCursos()
    .subscribe((data: ICurso[]) => this.cursos = data);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

}
