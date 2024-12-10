export enum ProgramaEntrenamientoEstado {
  ACTIVO = 'Activo',
  CANCELADO = 'Cancelado',
  FINALIZADO = 'Finalizado',
  PAGADO = 'Pagado',
  MODIFICADO = 'Modificado',
  PENDIENTE = 'Pendiente',
  NUEVO = 'Nuevo',
}

export interface ProgramaEntrenamiento {
  id: number;
  titulo: string;
  precio: number;
  entrenadorNombre: string;
  entrenadorFoto: string;
  estado: ProgramaEntrenamientoEstado;
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
