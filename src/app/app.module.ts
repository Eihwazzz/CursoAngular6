import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemsModule } from './items/items.module';
import { HomeModule } from './home/home.module';
import { CoreMModule } from './core-m/core-m.module';
import { CursoModuleModule } from './curso-module/curso-module.module';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { MenuGeneralComponent } from './core-m/menu-general/menu-general.component';
import { CursosComponent } from 'src/app/curso-module/cursos/cursos.component';
import { CursoComponent } from 'src/app/curso-module/curso/curso.component';

const ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    AlumnoComponent,
    DocenteComponent,
    MenuGeneralComponent
  ],
  imports: [
    BrowserModule,
    ItemsModule,
    HomeModule,
    CoreMModule,
    CursoModuleModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    CursoModuleModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
