import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemsModule } from './items/items.module';
import { HomeModule } from './home/home.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { CursoComponent } from './curso/curso.component';
import { ItemsComponent } from './items/items/items.component';
import { HomeComponent } from './home/home/home.component';

const ROUTES: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    AlumnoComponent,
    DocenteComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    ItemsModule,
    HomeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
