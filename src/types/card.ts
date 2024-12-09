import { Reserva } from '@/types/programa-entrenamiento';
import {
  ActividadDeportiva,
  InstalacionDeportiva,
} from '@/types/centro-deportivo';

export enum TypeCard {
  MultipleButton,
  SingleButton,
  StarsButton,
  ToggleButton,
}

export interface LargeCard
  extends ActividadDeportiva,
    InstalacionDeportiva,
    Reserva {
  tipo: TypeCard;
  page: string;
}

export interface ShortCard {}
