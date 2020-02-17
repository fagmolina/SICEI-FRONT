export class CasosEmblematicoSet{
  ID_CASO: number;
  NOMBRE_CASO: string;
  LUGAR_AFECTACION: string;
  ACTIVIDADES: string;
  INVESTIGADORES: number[];
}

export class CasoEmblematico{
  ID_CASO: number;
  NOMBRE_CASO: string;
  LUGAR_AFECTACION: string;
  ACTIVIDADES: string;
  ID_INVESTIGADOR: number;
  ID_GRADO: number;
  DESC_GRADO: string;
  DOCUMENTO: string;
  NOMBRES: string;
  APELLIDOS: string;
  EMAIL: string;
  TELEFONO: string;
  DIRECCION: string;
  ESTUDIOS: string;
  CATEGORIZADO: string;
  CATEGORIZADO_VALOR: string;
  PROFESOR: string;
  ESTUDIANTE: string;
}