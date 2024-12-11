import { Reserva } from '@/types/programa-entrenamiento';
import {
  ActividadDeportiva,
  InstalacionDeportiva,
} from '@/types/centro-deportivo';

export enum TypeLargeCard {
  MultipleButton,
  SingleButton,
  StarsButton,
  ToggleButton,
}

export interface LargeCard
  extends ActividadDeportiva,
    InstalacionDeportiva,
    Reserva {
  tipo: TypeLargeCard;
}

export interface ShortCard {}
