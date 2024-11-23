import { ActividadDeportiva, InstalacionDeportiva } from './centro-deportivo';
import { Reserva } from './programa-entrenamiento';

export enum TypeCard {
  MultipleButton,
  SingleButton,
  StarsButton,
  ToggleButton,
}

export interface LargeCard extends ActividadDeportiva, InstalacionDeportiva, Reserva {
  tipo: TypeCard;
  page: string;
}
