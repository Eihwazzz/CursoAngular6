import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from 'src/app/curso-module/cursos/cursos.component';
import { CursoComponent } from 'src/app/curso-module/curso/curso.component';
import { RouterModule } from '@angular/router';
import { CursoContainerComponent } from './curso-container/curso-container.component';
import { CursoServiceService } from './curso-service.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CursosComponent,
    CursoComponent,
    CursoContainerComponent
  ],
  providers: [
    CursoServiceService
  ]
})
export class CursoModuleModule { }
