import { IDocente } from "src/app/docente/idocente";

export interface ICurso {
    id:number;
    titulo:string;
    fechaInicio:number;
    fechaFin:number;
    asistentes:string[];
    profesor:IDocente;
    laboratorio:number;
    estado:number;
}
