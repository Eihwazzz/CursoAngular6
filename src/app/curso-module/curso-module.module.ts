import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from 'src/app/curso-module/cursos/cursos.component';
import { CursoComponent } from 'src/app/curso-module/curso/curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoComponent
  ]
})
export class CursoModuleModule { }
