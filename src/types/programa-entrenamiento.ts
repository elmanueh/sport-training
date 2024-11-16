export interface ProgramaEntrenamiento {
  id: number;
  titulo: string;
  estado: string;
  imagen: string;
  reservas: Reserva[];
}

export interface Reserva {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  monitor?: string;
  categoria: string;
  imagen: string;
  valoracion: number;
}
