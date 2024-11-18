import { ActividadDeportiva, InstalacionDeportiva } from './centro-deportivo';

export enum TypeCard {
  MultipleButton,
  SingleButton,
  StarsButton,
  ToggleButton,
}

export interface LargeCard extends ActividadDeportiva, InstalacionDeportiva {
  tipo: TypeCard;
  page: string;
}
