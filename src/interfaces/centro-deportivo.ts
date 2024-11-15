import { ActividadDeportiva } from './actividad-deportiva';
import { InstalacionDeportiva } from './instalacion-deportiva';

export interface CentroDeportivo {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  instalaciones: InstalacionDeportiva[];
  actividades: ActividadDeportiva[];
}
