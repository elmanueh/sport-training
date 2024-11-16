export interface CentroDeportivo {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  instalaciones: InstalacionDeportiva[];
  actividades: ActividadDeportiva[];
}
export interface ActividadDeportiva {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  valoracion: number;
}

export interface InstalacionDeportiva {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  valoracion: number;
}
