
import { VerTemasComponent } from '../app/Administrador_1/ver-temas/ver-temas.component';
import { VerCursoComponent } from '../app/Administrador_1/ver-curso/ver-curso.component';
import { MiscursosComponent } from './components/miscursos/miscursos.component';
import { InscripcionSComponent } from './components/inscripcion-s/inscripcion-s.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RevisarActividadesComponent } from './components/revisar-actividades/revisar-actividades.component';
import { AgregarTemaComponent } from '../app/Administrador_1/agregar-tema/agregar-tema.component';
import { ActJuegoComponent } from '../app/Administrador_1/act-juego/act-juego.component';
import { AgregarActividadComponent } from '../app/Administrador_1/agregar-actividad/agregar-actividad.component';
import { ActVideoComponent } from '../app/Administrador_1/act-video/act-video.component';
import { ActLecturaComponent } from '../app/Administrador_1/act-lectura/act-lectura.component';
import { InstructorLaboratorioComponent } from '../app/Administrador_2/instructor-laboratorio/instructor-laboratorio.component';
import { InstructorLaboratorioCrearComponent } from '../app/Administrador_2/instructor-laboratorio-crear/instructor-laboratorio-crear.component';
import { InstructorLaboratorioMenuComponent } from '../app/Administrador_2/instructor-laboratorio-menu/instructor-laboratorio-menu.component';

const routes: Routes = [
  {path:'alumnos',component:AlumnosComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'instructor',component:InstructorComponent},
  {path:'home',component: HomeComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'inscripcion',component:InscripcionComponent},
  {path:'inscripcion-s',component:InscripcionSComponent},
  {path:'miscursos',component:MiscursosComponent},
  {path:'ver-curso',component:VerCursoComponent},
  {path:'ver-temas',component:VerTemasComponent},
  {path:'revisar-actividades',component:RevisarActividadesComponent},
  {path:'agregar-actividades',component:AgregarActividadComponent},
  {path:'agregar-tema',component:AgregarTemaComponent},
  {path:'agregar-Juego',component:ActJuegoComponent},
  {path:'agregar-video',component:ActVideoComponent},
  {path:'agregar-lectura',component:ActLecturaComponent},
  {path:'agregar-Quiz',component:InstructorLaboratorioComponent},
  {path:'instructor pantalla quiz',component:InstructorLaboratorioCrearComponent},
  {path:'instructor crear laboratorio',component:InstructorLaboratorioCrearComponent},
  {path:'instructor laboratorio',component:InstructorLaboratorioMenuComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
