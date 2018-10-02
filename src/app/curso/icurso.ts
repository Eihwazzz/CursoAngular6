import { Estado } from "./estado.enum";

export interface ICurso {
    nombre:string;
    cantidadClases:number;
    horario:string;
    dias:string[];
    estado:Estado;
    descripcionEstado:String;
}
